const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const moment = require('moment');
const multer = require('multer');
const async = require('async');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const formidable = require('express-formidable');
const cloudinary = require('cloudinary');

const SHA1 = require('crypto-js/sha1');

// Models
const { User } = require('./models/User');
const { Brand } = require('./models/Brand');
const { Wood } = require('./models/Wood');
const { Product } = require('./models/Product');
const { Payment } = require('./models/Payment');
const { Site } = require('./models/Site');

// Middlewares
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

// Utils

const { sendEmail } = require('./utils/mail/index');

const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

//===============================
//            ADMIN UPLOADS
//===============================

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage: storage }).single('file');

app.post('/api/users/uploadfile', auth, admin, (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true
    });
  });
});

app.get('/api/users/admin_files', auth, admin, (req, res) => {
  const dir = path.resolve('.') + '/uploads/';
  fs.readdir(dir, (err, items) => {
    return res.status(200).send(items);
  });
});

app.get('/api/users/download/:id', auth, admin, (req, res) => {
  const file = path.resolve('.') + `/uploads/${req.params.id}`;
  res.download(file);
});

//===============================
//            PRODUCTS
//===============================

app.get('/api/product/articles', (req, res) => {
  let order = req.query.order || 'asc';
  let sortBy = req.query.sortBy || '_id';
  let limit = parseInt(req.query.limit) || 100;

  Product.find()
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, articles) => {
      if (err) {
        return res.status(400).json({ success: false });
      }

      return res.status(200).json({ success: true, articles });
    });
});

app.get('/api/product/articles_by_id', (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === 'array') {
    let ids = req.query.id.split(',');
    items = [];

    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });
  }

  Product.find({ _id: { $in: items } })
    .populate('brand')
    .populate('wood')
    .exec((err, data) => {
      return res.status(200).json({ success: true, data });
    });
});

app.post('/api/product/article', auth, admin, (req, res) => {
  const product = new Product(req.body);

  product.save((err, data) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    res.status(200).json({
      success: true,
      article: data
    });
  });
});

app.post('/api/product/shop', (req, res) => {
  let order = req.body.order || 'desc';
  let sortBy = req.body.sortBy || '_id';
  let limit = req.body.limit || '100';
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === 'price') {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1]
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  findArgs['publish'] = true;

  Product.find(findArgs)
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, articles) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }

      res.status(200).json({
        success: true,
        size: articles.length,
        articles
      });
    });
});

//===============================
//            WOODS
//===============================

app.get('/api/product/woods', (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).send(err);

    return res.status(200).json({
      success: true,
      woods
    });
  });
});

app.post('/api/product/wood', auth, admin, (req, res) => {
  const wood = new Wood(req.body);
  wood.save((err, data) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      wood: data
    });
  });
});

//===============================
//            BRAND
//===============================

app.get('/api/product/brands/', (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);

    return res.status(200).json({
      success: true,
      brands
    });
  });
});

app.post('/api/product/brand', auth, admin, (req, res) => {
  const brand = new Brand(req.body);

  brand.save((err, data) => {
    if (err) {
      return res.json({
        success: false,
        err
      });
    }

    return res.status(200).json({
      success: true,
      brand: data
    });
  });
});

//===============================
//            USERS
//===============================

// GET

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.user._id
    },
    { token: '' },
    (err, doc) => {
      if (err) {
        return res.json({
          success: false,
          err
        });
      }

      return res.status(200).send({
        success: true
      });
    }
  );
});

// POST

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) return res.json({ success: false, err });

    sendEmail(data.email, data.name, null, 'welcome');

    return res.status(200).json({
      success: true,
      userdata: data
    });
  });
});

app.post('/api/users/reset_user', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    user.generateResetToken((err, user) => {
      if (err) return res.status(400).json({ success: false, err });

      sendEmail(user.email, user.name, null, 'reset_password', user);

      return res.status(200).json({ success: true });
    });
  });
});

app.post('/api/users/reset_password', (req, res) => {
  const today = moment()
    .startOf('day')
    .valueOf();

  User.findOne(
    {
      resetToken: req.body.resetToken,
      resetTokenExp: {
        $gte: today
      }
    },
    (err, user) => {
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'Sorry, token bad, generate an ew one!'
        });
      }

      user.password = req.body.password;
      user.resetToken = '';
      user.resetTokenExp = '';

      user.save((err, data) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({
          success: true
        });
      });
    }
  );
});

app.post('/api/users/login', (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (!user) {
        return res.status(400).json({
          loginSuccess: false,
          message: 'Auth failed, email not found'
        });
      }

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: 'Wrong password!'
          });

        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res
            .cookie('w_auth', user.token)
            .status(200)
            .json({
              loginSuccess: true,
              token: user.token
            });
        });
      });
    }
  );
});

app.post('/api/users/uploadimage', auth, admin, formidable(), (req, res) => {
  cloudinary.uploader.upload(
    req.files.file.path,
    result => {
      res.status(200).send({
        public_id: result.public_id,
        url: result.url
      });
    },
    {
      public_id: `${Date.now()}`,
      resource_type: 'auto'
    }
  );
});

app.get('/api/users/removeimage', auth, admin, (req, res) => {
  let image_id = req.query.public_id;

  cloudinary.uploader.destroy(image_id, (error, result) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    res.status(200).res.json({ success: true });
  });
});

app.post('/api/users/addToCart', auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, data) => {
    let duplicate = false;

    data.cart.forEach(item => {
      if (item.id == req.query.productId) {
        duplicate = true;
      } else {
      }
    });

    if (duplicate) {
      User.findOneAndUpdate(
        {
          _id: req.user._id,
          'cart.id': mongoose.Types.ObjectId(req.query.productId)
        },
        { $inc: { 'cart.$.quantity': 1 } },
        { new: true },
        (err, data) => {
          if (err) {
            return res.status(400).json({
              success: false,
              err
            });
          }

          return res.status(200).json({
            success: true,
            data: data.cart
          });
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: mongoose.Types.ObjectId(req.query.productId),
              quantity: 1,
              data: Date.now()
            }
          }
        },
        { new: true },
        (err, data) => {
          if (err) {
            return res.status(400).json({
              success: false,
              err
            });
          }

          return res.status(200).json({
            success: true,
            data: data.cart
          });
        }
      );
    }
  });
});

app.get('/api/users/removefromcart', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { cart: { id: mongoose.Types.ObjectId(req.query._id) } } },
    { new: true },
    (err, data) => {
      let cart = data.cart;
      let array = cart.map(item => {
        return mongoose.Types.ObjectId(item.id);
      });

      Product.find({ _id: { $in: array } })
        .populate('brand')
        .populate('wood')
        .exec((err, cartDetail) => {
          return res.status(200).json({
            cartDetail,
            cart
          });
        });
    }
  );
});

app.post('/api/users/successbuy', auth, (req, res) => {
  let history = [];
  let transactionData = {};

  const date = new Date();
  const purchaseOrder = `PO-${date.getSeconds()}-${date.getMilliseconds()}-${SHA1(
    req.user._id
  )
    .toString()
    .substring(0, 8)}`;

  req.body.cartDetail.forEach(item => {
    history.push({
      porder: purchaseOrder,
      dateOfPurchase: Date.now(),
      name: item.name,
      brand: item.brand.name,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID
    });
  });

  transactionData.user = {
    id: req.user._id,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email
  };

  transactionData.data = {
    ...req.body.paymentData,
    porder: purchaseOrder
  };
  transactionData.product = history;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { history: history }, $set: { cart: [] } },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err
        });
      }

      const payment = new Payment(transactionData);
      payment.save((err, data) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err
          });
        }

        let products = [];

        data.product.forEach(item => {
          products.push({ id: item.id, quantity: item.quantity });
        });

        async.eachSeries(
          products,
          (item, callback) => {
            Product.update(
              { _id: item.id },
              {
                $inc: {
                  sold: item.quantity
                }
              },
              { new: false },
              callback
            );
          },
          err => {
            if (err) {
              return res.status(400).json({
                success: false,
                err
              });
            }

            sendEmail(user.email, user.name, null, 'purchase', transactionData);

            return res.status(200).json({
              success: true,
              cart: user.cart,
              cartDetail: []
            });
          }
        );
      });
    }
  );
});

app.post('/api/users/update_profile', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err
        });
      }

      return res.status(200).json({
        success: true
      });
    }
  );
});

//===============================
//            SITE
//===============================

app.get('/api/site/site_data', (req, res) => {
  Site.find({}, (err, site) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err
      });
    }

    return res.status(200).json({
      success: true,
      siteInfo: site[0].siteInfo
    });
  });
});

app.post('/api/site/site_data', (req, res) => {
  Site.findOneAndUpdate(
    { name: 'Site' },
    { $set: { siteInfo: req.body } },
    { new: true },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err
        });
      }

      return res.status(200).json({
        success: true,
        siteInfo: data.siteInfo
      });
    }
  );
});

//===============================

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
