var express = require('express');
var app = express();
var RecordStore = require('./models/record_store.js');
var expressLayouts = require('express-ejs-layouts');
var recordRouter = require('./controllers/recordRouter');

//application settings
app.set('views', './views');
app.set('view engine', 'ejs');

//Middleware: 
app.use(expressLayouts);
app.use("/records", recordRouter);



//View full record store: 
// app.get('/records', function(req, res){
//   res.send(RecordStore.records);
// });

//View one record: 
// app.get('/records/:id', function(req, res){
//   res.send(RecordStore.records[req.params.id-1]);
// });



//Find index: 
app.get('/', function(req, res) {
  res.render('index', { welcome: "Welcome to the Record Store" });
});

app.listen('3000', function(){
  console.log('Record Store running on port 3000');
})

