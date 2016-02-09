var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.render('index', { welcome: "Welcome to the Record Store" });
});



app.listen('3000', function(){
  console.log('Record Store running on port 3000');
})

