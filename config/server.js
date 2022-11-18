const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

//setting - configuración
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//Middleware - Intercambio de información entre aplicaciones
//permite recibir los input por sus atributos name
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));

module.exports = app;
