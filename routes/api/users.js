var mongoose = require('mongoose');
var router = require('express').Router();
var Customers = mongoose.model('Customers');
var path = require('path');

router.get('/customers',  function(req, res, next){
   
  Customers.find({})
  .then(function(customers){
    if(!customers){
      return res.sendStatus(401); 
    }
    res.render('index', {customers: customers});
  }).catch(next);
});


module.exports = router;
