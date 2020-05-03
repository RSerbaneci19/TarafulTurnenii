const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const hbs = require('nodemailer-express-handlebars')

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './views',
    layoutsDir: './views',
    defaultLayout: 'index.hbs',
  },
  viewPath: './views',
  extName: '.hbs',
};

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "rs.leese19@gmail.com",
    clientId: "177077065020-769phg7uphka7d953qh0dd5asa5fkh2h.apps.googleusercontent.com",
    clientSecret: "-zUu3kACpdUNYooXjh8eZj7d",
    refreshToken: "1//04fex7fYFZ01BCgYIARAAGAQSNwF-L9IrUy08kAwDFSXnqh6wi0n2wp7ecWktSF08Qe0oa7CVtwvsLb7I8l6wFBiHr1FC6nEV4vE"
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.use('compile', hbs(handlebarOptions));

app.use(bodyParser.json());
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let mailOptions = {
    from: req.body.contactFormName,
    to: ['R.Serbaneci19@gmail.com'],
    subject: req.body.contactFormSubjects,
    template: 'index',
    context: {
      text: req.body.contactFormMessage,
      name: req.body.contactFormName,
      email: req.body.contactFormEmail,
      phone: req.body.contactFormPhone
    }
  };

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('Sent Successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
