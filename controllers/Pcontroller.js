'use strict';
var Products = require('../model/Productdal');

exports.getAll = function(req, res) {
  Products.getAllProducts(function(err, Products) {
    if (err)
      res.send(err);
    res.send(Products);
  });
};



  exports.insert = function(req, res) {
    var new_Products = new Products(req.body);
    //handles null error 
     if(!new_Products.ProductID || !new_Products.Title|| !new_Products.Description || !new_Products.UnitPrice ||!new_Products.Quantity){
        res.status(400).send({ error:true, message: 'Please provide' });
      }
     else{
      Products.createProducts(new_Products, function(err, Products) {
        if (err)
        res.send(err);
      res.json("Data Inserted Successfully");
      });
    }
  };
  
exports.getBy = function(req, res) {
  Products.getProductsById(req.params.ProductID, function(err, Products) {
    if (err)
      res.send(err);
    res.json(Products);
  });
};


exports.update = function(req, res) {
  var update_product =new Products(req.body);
  Products.updateById(req.params.ProductID, update_product, function(err) {
    if (err)
      res.send(err);
    res.json("Products update successfully");
  });
};


exports.remove = function(req, res) {
  Products.remove( req.params.ProductId, function(err, Products) {
    if (err)
      res.send(err);
    res.json({ message: 'Products successfully deleted' });
  });
};