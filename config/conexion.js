var mysql = require('mysql');

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'Amc$0629$'
const DB_NAME = process.env.DB_NAME || 'baseCrud'
const DB_PORT = process.env.DB_PORT || 3306

var baseArticulos = mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT
   }
);

baseArticulos.connect(
   (err)=>{
      if (!err) {
         console.log('Conexión establecida', err);
      } else {
         console.log('Error de conexión', err);
      }
   }
);
module.exports=baseArticulos;