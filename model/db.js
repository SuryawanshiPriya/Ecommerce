// database connectivity
var mysql= require('mysql');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Virtua1#',
    database:'Shopping card',
});

connection.connect(function(err){
    if(err) throw err;

});
module.exports=connection;