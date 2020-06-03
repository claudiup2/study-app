const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();
 
app.use(express.static(__dirname + '/dist/study-app'));
 
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname+'/dist/study-app/index.html'));
});
 
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});