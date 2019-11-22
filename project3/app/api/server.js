const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Models
const { User } = require('./models/User');
const { Brand } = require('./models/Brand');
const { Wood } = require('./models/Wood');
const { Product } = require('./models/Product');

// Middlewares
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.get('/app/product/brands/', (req, res) => {
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
    return res.status(200).json({
      success: true,
      userdata: data
    });
  });
});

app.post('/api/users/login', (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (!user) {
        return res.json({
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

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
