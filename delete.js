var mysql=require('mysql');

var con=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"dummy"
});

con.connect(function(err){
   if(err) throw err;
   console.log("Connected!");
   var sql ="DELETE FROM customers WHERE address = 'address'";
   con.query(sql, function (err, result){
      if(err) throw err;
      console.log("Number of records deleted: "+result.rowsAffected);
   });
});