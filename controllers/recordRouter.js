var express      = require('express');
var recordRouter = express.Router();
var recordStore  = require('./../models/record_store.js');

recordRouter.get('/', function(req, res){
  // INDEX
  res.render('records/index', {recordStore: recordStore})
})

recordRouter.get('/new', function(req, res) {
  // NEW
  res.send("NEW record route");
});

recordRouter.post('/', function(req, res) {
  // CREATE
  res.send("CREATE planet route");
});

recordRouter.get('/:id', function(req, res){
  // SHOW
  res.render('records/show', {record: recordStore.records[req.params.id-1]});
})

recordRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.send("EDIT record route " + recordStore.records[req.params.id-1].name);
});

recordRouter.post('/:id', function(req, res) {
  // UPDATE
  res.send("UPDATE record route " + recordStore.records[req.params.id-1].name);
});

recordRouter.post('/:id', function(req, res) {
  // DELETE
  res.send("DELETE planet " + recordStore.records[req.params.id-1].name);
});

module.exports = recordRouter