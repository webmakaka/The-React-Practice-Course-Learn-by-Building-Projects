const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { User } = require('./models/User');

const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

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
