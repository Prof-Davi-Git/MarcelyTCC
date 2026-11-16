-- ATUALIZAÇÃO 16/11 - Banco didático (não conectado ao site).
CREATE DATABASE IF NOT EXISTS lia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE lia;
CREATE TABLE IF NOT EXISTS usuarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(120) NOT NULL,
 email VARCHAR(160) NOT NULL UNIQUE,
 senha_hash VARCHAR(255) DEFAULT NULL,
 criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO usuarios (id,nome,email) VALUES
(1,'Ana Exemplo','ana@lia.example'),
(2,'Beatriz Exemplo','beatriz@lia.example'),
(3,'Carla Exemplo','carla@lia.example'),
(4,'Daniela Exemplo','daniela@lia.example'),
(5,'Fernanda Exemplo','fernanda@lia.example')
ON DUPLICATE KEY UPDATE nome=VALUES(nome);
SELECT id,nome,email FROM usuarios;
