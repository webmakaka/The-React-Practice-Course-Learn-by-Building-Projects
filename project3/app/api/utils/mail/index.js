const mailer = require('nodemailer');
const { welcome } = require('./welcome_template');

const getEmailData = (to, name, token, template) => {
  let data = null;

  switch (template) {
    case 'welcome':
      data = {
        from: 'Waves <your.gmail.account@gmail.com>',
        to,
        subject: `Welcome to waves ${name}`,
        html: welcome()
      };
      break;

    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, token, type) => {
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

  const mail = getEmailData(to, name, token, type);

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
