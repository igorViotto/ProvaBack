DROP DATABASE IF EXISTS venda;
CREATE DATABASE venda CHARSET=UTF8 COLLATE utf8_general_ci;
USE venda;

CREATE TABLE vendedores (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    matricula INT NOT NULL
);

CREATE TABLE produtos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

CREATE TABLE vendas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATETIME NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (produtoId) REFERENCES produtos(id),
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id)
);

INSERT INTO vendedores VALUES 
(default, "Stefany Antonella", 14644),
(default, "Stella Viana", 01516),
(default, "Tomás Isaac", 50913),
(default, "Osvaldo Galvão", 72193);

INSERT INTO produtos VALUES
(default, "Samsung Galaxy M53", 2211.11),
(default, "Motorola Moto G42", 1499.00),
(default, "Rainha das Chamas", 36.90),
(default, "Cronica Saxonicas", 57.90),
(default, "O milagre do amanhã", 56.59),
(default, "Lava Roupas Brastemp BWK12AB", 2199.00),
(default, "Fogao Atlas 4 mouths", 899.00);

INSERT INTO vendas VALUES
(default, "2023-04-18T09:08:39", 2, 1, 3),
(default, "2023-04-18T09:08:39", 1, 2, 3),
(default, "2023-04-18T09:08:39", 3, 1, 2),
(default, "2023-04-18T09:08:39", 1, 3, 2),
(default, "2023-04-18T09:08:39", 2, 2, 1),
(default, "2023-04-18T09:08:39", 1, 3, 1);