'use strict';
var ODetails = require('../model/ODdal');

// Get All//
exports.getAll = function(req, res) {
    ODetails.getAllODetails(function(err, ODetails) {
    if (err)
      res.send(err);
    res.send(ODetails);
  });
};


// Get By ID//
exports.getBy = function(req, res) {
    ODetails.getODetailsById(req.params.OrderDetailsID, function(err, ODetails) {
    if (err)
      res.send(err);
    res.json(ODetails);
  });
};

// INSERT DATA //

exports.insert = function(req, res) {
    var newOrderD = new ODetails(req.body);
    //handles null error 
     if(!newOrderD.OrderDetailsID || !newOrderD.OrderID|| !newOrderD.ProductID || !newOrderD.Quantity ||!newOrderD.Amount){
        res.status(400).send({ error:true, message: 'Please provide' });
      }
     else{
        ODetails.insertODetails(newOrderD, function(err, ODetails) {
        if (err)
        res.send(err);
      res.json("Data Inserted Successfully");
      });
    }
  };

  // UPDATE DATA //

exports.update = function(req, res) {
  var updateOrderD = new ODetails(req.body);

  ODetails.updateById(req.params.OrderDetailsID, updateOrderD, function(err) {
    if (err)
      res.send(err);
    res.json("Order details update successfully");
  });
};

// DELETE DATA //
exports.remove = function(req, res) {
    ODetails.remove( req.params.OrderDetailsID, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Order details successfully deleted' });
  });
};

exports.getPatch = function(req, res) {
  var PTotal = new ODetails(req.body);

  ODetails.getPatch(req.params.CustomerID, PTotal, function(err,res) {
    if (err)
      res.send(err);
    res.send(res);
  });
};