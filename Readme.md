# CRUD Tabs, Grid and Mysql

_CRUD utilizando pestañas, grilla de datos con base en Mysql_

## Instalación

_El primer paso es clonar(descargar) el proyecto, lo primero es abrir la consola y escribir lo siguiente_

```
git clone https://github.com/alexmunozca/crud-tabs-grid-mysql
```

## Inicialización

_El primer paso es descargar los modulos del proyecto, esto se hace con el siguiente comando_

```
npm install
```

## Script Base de datos 

```
CREATE DATABASE IF NOT EXISTS baseCrud;

USE baseCrud;

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE `articulos` (
  `Codigo` varchar(20) CHARACTER SET utf8 NOT NULL,
  `Descripcion` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `articulos` (`Codigo`,`Descripcion`) VALUES 
 ('001','ARTICULO UNO'),
 ('002','ARTICULO DOS');```
```
```
Revisar el archivo en la carpeta /config/conexion.js para usuario y paswword de la base de datos
se modifico el archivo para poder correr en Railway.app
```

## Despliegue

```
npm start
```

## Pantalla

![](/public/images/Pantalla1.png)
![](/public/images/Pantalla2.png)
