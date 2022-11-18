var mysql = require('mysql');

var baseArticulos = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Amc$0629$',
      database: 'baseCrud',
   }
);

baseArticulos.connect(
   (err)=>{
      if (!err) {
         console.log('Conexión establecida');
      } else {
         console.log('Error de conexión');
      }
   }
);
module.exports=baseArticulos;