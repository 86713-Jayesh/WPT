const mysql = require("mysql2");

const pool= mysql.createConnection  (
{
    host: "localhost",
    database : "airbnb_db",
    port : 3306,
    user : "KD2-87412-Abhishek",
    password : "manager"
});


module.exports={
pool
};
