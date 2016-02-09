var express      = require('express');
var recordRouter = express.Router();
var recordStore  = require('./../models/record_store.js');
var bodyParser = require("body-parser");
recordRouter.use(bodyParser.urlencoded({ extended: false })); 


recordRouter.get('/', function(req, res){
  // INDEX
  res.render('records/index', {recordStore: recordStore})
})

recordRouter.get('/new', function(req, res) {
  // NEW
  res.render("records/new");
});

recordRouter.post('/', function(req, res) {
  // CREATE
  var newRecord = {};
  newRecord.record = req.body.record;
  newRecord.artist = parseInt(req.body.artist);
  recordStore.records.push(newRecord);
  res.redirect('/');
});



recordRouter.get('/:id', function(req, res){
  // SHOW
    res.render('records/show', {record: recordStore.records[req.params.id-1]});
  });

recordRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.render('records/edit' + recordStore.records[req.params.id-1].name);
});

recordRouter.post('/:id', function(req, res) {
  // UPDATE
  res.send("UPDATE record route " + recordStore.records[req.params.id-1].name);
});

recordRouter.post('/:id', function(req, res) {
  // DELETE
  res.send("DELETE record " + recordStore.records[req.params.id-1].name);
});

module.exports = recordRouter