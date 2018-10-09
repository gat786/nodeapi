var mysql = require('mysql');

var con = mysql.createConnection({
    host:"159.89.161.122",
    user:"ganesh",
    password:"hotMAIL123@",
    database:"trivia_db"
});

var sql ="select * from science_boolean";

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    });
});