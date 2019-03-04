'use strict';

const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`Hello, Node.js on Docker world!\nHostname: ${hostname}\n\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
