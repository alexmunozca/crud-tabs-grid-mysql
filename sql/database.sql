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
 ('002','ARTICULO DOS');
