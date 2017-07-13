var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(3000);
console.log('=== Go to http://localhost:3000 ===');
