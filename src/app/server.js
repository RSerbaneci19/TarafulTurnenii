const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const hbs = require('nodemailer-express-handlebars')

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './src/app/views',
    layoutsDir: './src/app/views',
    defaultLayout: 'index.hbs'
  },
  viewPath: './src/app/views',
  extName: '.hbs',
};

const transporter = nodemailer.createTransport({

  /* TODO (i) Implement OAuth2 */
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
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Serve the angular and static files Local, GAE don't care */
const staticAppOptions = {
  maxAge: '1d',
  redirect: false,
};

/* TODO (i) Move the next into an .env file that is loaded on startup - see https://www.npmjs.com/package/dotenv */
const resolve = require('path').resolve;
const CLIENT_APP_PATH = resolve(__dirname, '../../dist');
app.use(
  express.static(
    CLIENT_APP_PATH,
    staticAppOptions,
  ),
);

app.post('/send', function (req, res) {

  let mailOptions = {
    from: '"Taraful Turnenii" <tarafulturnenii@gmail.com>',
    to: ['R.Serbaneci19@gmail.com', 'turneanum@gmail.com'],
    subject: req.body.contactFormMainDropdown,
    template: 'index',
    context: {
      name: req.body.contactFormName,
      email: req.body.contactFormEmail,
      phone: req.body.contactFormPhone,
      eventType: req.body.contactFormMainDropdown,
      locationType: req.body.contactFormLocationType,
      address: req.body.contactFormAddress,
      date: req.body.contactFormDate,
      fromTime: req.body.contactFormFromTime,
      toTime: req.body.contactFormToTime,
      text: req.body.contactFormMessage
    }
  };

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.error(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(PORT, function () {
  console.log('Express started on port: ', PORT);
});
