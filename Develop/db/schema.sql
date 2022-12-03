-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- Add category table --
CREATE TABLE category(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(100) NOT NULL
);


-- Add product table --
CREATE TABLE product(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL, -- validate it being decimal here --
  stock INT NOT NULL DEFAULT 10
);