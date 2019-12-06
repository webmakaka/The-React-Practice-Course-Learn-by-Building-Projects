const mailer = require('nodemailer');
const { welcome } = require('./welcome_template');
const { purchase } = require('./purchase_template');
const { resetPass } = require('./resetpass_template');
require('dotenv').config();

const getEmailData = (to, name, token, template, actionData) => {
  let data = null;

  switch (template) {
    case 'welcome':
      data = {
        from: 'Waves <your.gmail.account@gmail.com>',
        to,
        subject: `Welcome to waves ${name}!`,
        html: welcome()
      };
      break;

    case 'purchase':
      data = {
        from: 'Waves <your.gmail.account@gmail.com>',
        to,
        subject: `Thanks for shopping with us, ${name}!`,
        html: purchase(actionData)
      };
      break;

    case 'reset_password':
      data = {
        from: 'Waves <your.gmail.account@gmail.com>',
        to,
        subject: `Hey , ${name}, reset your pass!`,
        html: resetPass(actionData)
      };
      break;

    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
    // requireTLS: true,
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type, actionData);

  smtpTransport.sendMail(mail, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('email sent');
    }

    smtpTransport.close();
  });
};

module.exports = { sendEmail };
