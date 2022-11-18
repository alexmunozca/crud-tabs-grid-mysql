const express = require('express');
const app = express();

//Pasa para todas las rutas y continua si esta next como parametro y funcion
function logger(req, res, next) {
   console.log(`Ruta Recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
   next();
}
//Configuración
app.set('appName', "Mantenimiento Articulos");
app.set('port', 3000);
app.set('view engine', 'ejs');
//middleware que se procesan antes de las rutas
//cuando una aplicacion envie un json express lo entienda
app.use(express.json());
app.use(logger);

app.all('/', (req, res) => {
   connection.query('SELECT * FROM articulos', (err, result) =>{
      res.render('index.ejs', {
         resultadoArticulos: result
      });
   })});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
   console.log(app.get('appName'));
   console.log('Servidor en puerto ', app.get('port'));
});
