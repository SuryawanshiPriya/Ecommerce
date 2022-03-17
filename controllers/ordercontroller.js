'use strict';
var Orders = require('../model/orderdal');

exports.getAll = function(req, res) {
    Orders.getAllOrders(function(err, Orders) {
    if (err)
      res.send(err);
    res.send(Orders);
  });
};


exports.insert = function(req, res) {
  

    var new_Orders = new Orders(req.body);
  
    //handles null error 
     if(!new_Orders.OrderID || !new_Orders.OrderDate|| !new_Orders.CustomerID || !new_Orders.Status ){
        res.status(400).send({ error:true, message: 'Please provide' });
      }
     else{
        Orders.createOrders(new_Orders, function(err, Orders) {
        if (err)
        res.send(err);
      res.json("Data Inserted Successfully");
      });
    }
  };
  
exports.getBy = function(req, res) {
    Orders.getOrdersById(req.params.OrderID, function(err, Orders) {
    if (err)
      res.send(err);
    res.json(Orders);
  });
};


exports.update = function(req, res) {
  var update_Order =new Orders(req.body);
  Orders.updateById(req.params.OrderID, update_Order, function(err) {
    if (err)
      res.send(err);
    res.json("Orders update successfully");
  });
};


exports.remove = function(req, res) {
    Orders.remove( req.params.OrderID, function(err, Orders) {
    if (err)
      res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};