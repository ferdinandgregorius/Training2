var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dummy"
});

conn.connect(function(err){
   if(err) throw err;
   console.log("Connected!");

   var sql="UPDATE customers SET address = 'new address' WHERE ID = '1' ";
   con.query(sql, function (err, result){
       if(err)throw err;
       console.log(result.rowsAffected + " record(s) updated");
   });
});