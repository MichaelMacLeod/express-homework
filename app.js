var express = require('express');
var app = express();
var RecordStore = require('./models/record_store.js');

app.get('/records', function(req, res){
  res.send(RecordStore.records);
});

app.get('/', function(req, res) {
  res.render('index', { welcome: "Welcome to the Record Store" });
});



app.listen('3000', function(){
  console.log('Record Store running on port 3000');
})

