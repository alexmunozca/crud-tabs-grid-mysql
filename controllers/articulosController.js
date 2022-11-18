var baseArticulos=require('../config/conexion')

module.exports={
   index:function(req, res) {
      baseArticulos.query('SELECT * FROM articulos', (err, datos) =>{
         console.log("articulosController index");
         res.render('index', { pestaña: 'consulta', proteger: '', botones: '',
         codigo: '', descripcion: '', resultadoArticulos:datos });
      });
   },
   agregar:function(req, res) {
      baseArticulos.query("INSERT INTO articulos (codigo, descripcion) VALUES (?, ?) ", [req.body.codigo, req.body.descripcion], (err) => {
         res.redirect('/');
      });      
   },
   eliminar:function(req, res) {
      baseArticulos.query("DELETE FROM articulos WHERE codigo=? ", [req.body.codigo], (err) => {
         res.redirect('/');
      });
   },
   modificar:function(req, res) {
      baseArticulos.query("SELECT * FROM articulos WHERE codigo=? ", [req.body.codigo], (err, respuesta) => {
         baseArticulos.query('SELECT * FROM articulos', (err, datos) =>{
            res.render('index', { pestaña: 'informacion', proteger: 'readOnly', botones: 'actualiza',
            codigo: respuesta[0].Codigo, descripcion: respuesta[0].Descripcion, resultadoArticulos:datos });
         });
      });
   },
   actualizar:function(req, res) {
      baseArticulos.query("UPDATE articulos SET Descripcion=? WHERE codigo=? ", [req.body.descripcion, req.body.codigo], (err) => {
         res.redirect('/');
      });
   },
   renovar:function(req, res) {
      res.redirect('/');
   },
   consultar:function (req, res) {  
      console.log("consultar");
      baseArticulos.query('SELECT * FROM articulos', (err, datos) =>{
         baseArticulos.query("SELECT * FROM articulos WHERE codigo=? ", [req.body.codigo], (err, respuesta) => {
            if (typeof respuesta[0] == 'undefined') {
               res.render('index', { pestaña: 'informacion', proteger: '', botones: 'nuevo',
               codigo: req.body.codigo, descripcion: '', resultadoArticulos:datos });
            } else {
               res.render('index', { pestaña: 'informacion', proteger: 'readOnly', botones: 'existe',
               codigo: respuesta[0].Codigo, descripcion: respuesta[0].Descripcion, resultadoArticulos:datos });
            }
         });
      });
   },
   filtrar:function (req, res) {
      if (!req.body.fcodigo=="") {
         baseArticulos.query('SELECT * FROM articulos WHERE codigo=? ', [req.body.fcodigo], (err, datos) =>{
            res.render('index', { pestaña: 'consulta', proteger: '', botones: '',
            codigo: '', descripcion: '', resultadoArticulos:datos });
         });
      }
      if (!req.body.fdescripcion=="") {
         req.body.fdescripcion = '%' + req.body.fdescripcion + '%';
         baseArticulos.query('SELECT * FROM articulos WHERE descripcion LIKE ? ', [req.body.fdescripcion], (err, datos) =>{
            res.render('index', { pestaña: 'consulta', proteger: '', botones: '',
            codigo: '', descripcion: '', resultadoArticulos:datos });
         });
      }
   },
   salir:function(req, res) {
      res.redirect('/');
      console.log("salir");
   },
}