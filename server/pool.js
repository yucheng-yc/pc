const mysql=require("mysql");
const pool=mysql.createPool({
    host:'localhost',
    password:'',
    user:'root',
    database:"ycpc",
    port:3306,
    connectionLimit:20 //设置连接池大小
});

module.exports=pool;