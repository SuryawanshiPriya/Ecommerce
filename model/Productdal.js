'user strict';
var sql = require('./db');

var Product = function(Products){
  this.ProductID = Products.ProductID;
  this.Title = Products.Title;
  this.Description = Products.Description;
  this.UnitPrice = Products.UnitPrice;
  this.Quantity = Products.Quantity;

};

Product.createProducts = function (newProducts, result) {    
        sql.query("INSERT INTO Products set ?", newProducts, function (err, res) {
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

Product.getProductsById = function (ProductID, result) {
        sql.query("Select * from Products where ProductID = ? ", ProductID, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Product.getAllProducts = function (result) {
        sql.query("Select * from Products", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Title : ', res);  
                  result(null, res);
                }
            });   
};


Product.updateById = function(ProductID, Product, result){
  sql.query("UPDATE `Products` SET `Title`=?,`Description` =?,`UnitPrice` =?, `Quantity` =? WHERE (`ProductID` = ?)", 
            [Product.Title,Product.Description,Product.UnitPrice,Product.Quantity,ProductID], 
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


Product.remove = function(id, result){
    sql.query("DELETE FROM Products WHERE ProductID = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Product;