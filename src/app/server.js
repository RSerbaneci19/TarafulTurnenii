const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const hbs = require('nodemailer-express-handlebars')

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './src/app/views',
    layoutsDir: './src/app/views',
    defaultLayout: 'index.hbs',
  },
  viewPath: './src/app/views',
  extName: '.hbs',
};

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'tarafulturnenii@gmail.com',
    pass: 'Taraful_*MTRS*_Turnenii'
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.use('compile', hbs(handlebarOptions));

app.use(bodyParser.json());
app.use(express.static('./dist'))
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
  let senderPhone = req.body.contactFormPhone;
  let messageSubject = req.body.contactFormSubjects;
  let messageText = req.body.contactFormMessage;

  let mailOptions = {
    from: '"Taraful Turnenii" <tarafulturnenii@gmail.com>',
    to: ['R.Serbaneci19@gmail.com'],
    subject: messageSubject,
    template: 'index',
    context: {
      text: messageText,
      name: senderName,
      email: senderEmail,
      phone: senderPhone
    }
  };

  if (senderName === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (senderPhone === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});
