'user strict';
var sql = require('./db');

var Order = function(Orders){
  this.OrderID = Orders.OrderID;
  this.OrderDate = Orders.OrderDate;
  this.Status = Orders.Status;

};

Order.createOrders = function (newOrders, result) {    
        sql.query("INSERT INTO Orders set ?", newOrders, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null,res.insertId);
                }
            });           
};

Order.getOrdersById = function (OrderID, result) {
        sql.query("Select * from Orders where OrderID = ? ", OrderID, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Order.getAllOrders = function (result) {
        sql.query("Select * from Orders", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('OrderID : ', res);  
                  result(null, res);
                }
            });   
};


Order.updateById = function(OrderID, Order, result){
  sql.query("UPDATE `Orders` SET `OrderDate`=?,`Status` =? WHERE (`OrderID` = ?)", 
            [Order.OrderDate,Order.CustomerID,Order.Status,OrderID], 
            function (err, res) {
    
          if(err) {
               console.log("error: ", err);
               result(null, err);
             }
           else{   
           result(null, res);
            }
   }); 
};  

Order.remove = function(id, result){
    sql.query("DELETE FROM Orders WHERE OrderID = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Order;