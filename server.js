if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('its working');
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    debug: false,
    logger: true,
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send('error');
    } else {
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
