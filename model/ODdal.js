'user strict';
var sql = require('./db');

var OD = function(ODetails){
  this.OrderDetailsID = ODetails.OrderDetailsID;
  this.CustomerID = ODetails.CustomerID;
  this.OrderID = ODetails.OrderID;
  this.ProductID = ODetails.ProductID;
  this.Quantity = ODetails.Quantity;
  this.Amount = ODetails.Amount;

};

// Get By ID//
OD.getODetailsById = function (id, result) {
        sql.query("Select * from Order_Details where OrderDetailsID = ? ", id, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};

// Get All//
OD.getAllODetails = function (result) {
        sql.query("Select * from Order_Details", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('ODetails : ', res);  
                  result(null, res);
                }
            });   
};

// INSERT DATA //

OD.insertODetails = function (newOrderD, result) {    
    sql.query("INSERT INTO Order_Details set ?", newOrderD, function (err, res) {
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

OD.updateById = function(id, od, result){
  sql.query("UPDATE `Order_Details` SET `OrderID`=?,`CustomerID`=?,`ProductID` =?,`Quantity` =?, `Amount` =? WHERE (`OrderDetailsID` = ?)", 
            [od.OrderID,od.ProductID,od.Quantity,od.Amount,id], 
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


OD.remove = function(id, result){
    sql.query("DELETE FROM Order_Details WHERE OrderDetailsID = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

OD.getPatch = function(id, result){
  sql.query("SELECT SUM(Amount) AS Total FROM `Order_Details` WHERE CustomerID = ?", [id], function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
          }); 
};

module.exports= OD;