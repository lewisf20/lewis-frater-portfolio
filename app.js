const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// ##### Port
const port = process.env.PORT || 3000;

// ##### Static folder
app.use(express.static('public'));

// ##### View Engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ##### Page Routes
// Index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
//Projects
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/projects.html'));
});

// CV
app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/cv.html'));
});

// ##### Contact and Send endpoint

// Contact view render
app.get('/contact', (req, res) => {
  //res.sendFile(path.join(__dirname + '/public/contact.html'));
  res.render('contact');
});

//Send
app.post('/send', async (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name} </li>
      <li>Email: ${req.body.email} </li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL, // generated ethereal user
      pass: process.env.USER_PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let options = {
    from: `"Lewis Frater (auto generated)" <${process.env.USER_EMAIL}>`, // sender address
    to: 'lewis_frater@yahoo.com', // list of receivers
    subject: 'Portfolio contact form', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };
  // send mail with defined transport object
  let info = await transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Your email has been sent' });
  });
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
