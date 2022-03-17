'use strict';
module.exports = function(app) {
  var ProductsController = require('../controllers/Pcontroller');
  var Orderdetails = require('../controllers/ODcontroller');
  var OrderController = require('../controllers/ordercontroller');


  app.route('/Products')
     .get(ProductsController.getAll)
     .post(ProductsController.insert);
   
  app.route('/Products/:ProductID')
      .get(ProductsController.getBy)
      .put(ProductsController.update)
      .delete(ProductsController.remove);
  

  /************  Order_Details *************/

  app.route('/Order_Details')
  .get(Orderdetails.getAll)
  .post(Orderdetails.insert);

app.route('/Order_Details/:OrderDetailsID')
   .get(Orderdetails.getBy)
   .put(Orderdetails.update)
   .delete(Orderdetails.remove)
   .patch(Orderdetails.getPatch);


  /************  Order *************/
   app.route('/Orders')
      .get(OrderController.getAll)
      .post(OrderController.insert);
   
  app.route('/Orders/:OrderID')
      .get(OrderController.getBy)
      .put(OrderController.update)
      .delete(OrderController.remove);

};