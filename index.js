const express = require('express');

const app = express();

const { PORT = 3005 } = process.env;

app.listen(PORT);
console.log('app is listening on port', PORT);

app.get('/health', (req, res) => {
  res.send('OK');
});
