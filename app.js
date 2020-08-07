const express = require('express');
const path = require('path');

const app = express();

// ##### Port
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// ##### Page Routes

// Index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
//Projects
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/projects.html'));
});
// Contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});
// CV
app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/cv.html'));
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
