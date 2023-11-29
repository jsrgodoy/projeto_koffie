CREATE DATABASE koffie;
use koffie;
CREATE TABLE cafeteria (
    ID_cafeteria INT(4) PRIMARY KEY auto_increment,
    nome_cafeteria VARCHAR(20) NOT NULL
);
CREATE TABLE produto (
    ID_produto INT(4) PRIMARY KEY auto_increment,
    nome_produto VARCHAR (50) NOT NULL,
    quantidade INT NOT NULL,
    pedido_FK INT (4)
);
CREATE TABLE pedido (
    ID_pedido INT(4) PRIMARY KEY auto_increment,
    total INT NOT NULL,
    status_pedido VARCHAR(20) NOT NULL,
    cliente_FK INT (4),
    produto_FK INT (4)
);
CREATE TABLE cliente (
    ID_cliente INT(4) PRIMARY KEY auto_increment,
    nome_cliente VARCHAR (50) NOT NULL,
    endereco_FK INT,
    contato_FK INT (4)
);
CREATE TABLE contato (
    ID_contato INT(4) PRIMARY KEY auto_increment,
    ddd INT NOT NULL,
    telefone INT NOT NULL,
    email VARCHAR (50) NOT NULL,
    cliente_FK INT (4)
);
CREATE TABLE endereco(
    ID_endereco INT(4) PRIMARY KEY auto_increment,
    rua VARCHAR (100) NOT NULL,
    numero_rua int NOT NULL,
    bairro VARCHAR (50) NOT NULL,
    cidade VARCHAR (50) NOT NULL,
    estado VARCHAR (10) NOT NULL,
    cliente_FK INT (4)
);