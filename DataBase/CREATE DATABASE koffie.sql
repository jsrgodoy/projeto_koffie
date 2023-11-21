CREATE DATABASE koffie;
use koffie CREATE TABLE;
CREATE TABLE cafeteria(
    ID_cafeteria serial PRIMARY KEY,
    nome_cafeteria varchar (30) not null,
    proprietário varchar (50)
);
CREATE TABLE produto(
    ID_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR (50) NOT NULL,
    quantidade INT NOT NULL
);
CREATE TABLE cliente (
    ID_cliente SERIAL PRIMARY KEY,
    nome_cliente VARCHAR (50) NOT NULL,
    telefone VARCHAR (20) NOT NULL,
    email VARCHAR (30) NOT NULL,
    endereco VARCHAR (100) NOT NULL
);
CREATE TABLE pedido (
    ID_pedido SERIAL PRIMARY KEY,
    status_pedido VARCHAR (30) NOT NULL,
    total FLOAT NOT NULL
);