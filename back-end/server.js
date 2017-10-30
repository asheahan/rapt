require('dotenv').config();

const allowCORS = require('./config/cors');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.ALLOW_CORS === 'true') {
  allowCORS(app);
}

// send index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Rapt server listening on port ${process.env.PORT}`);
});
