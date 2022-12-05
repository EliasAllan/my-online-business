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
  stock INT NOT NULL DEFAULT 10,
  category_id INT ,
  FOREIGN KEY (category_id)
  REFERENCES category(id)
);

-- Add Tag table --
CREATE TABLE tag(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  tag_name VARCHAR(100) NOT NULL
);

-- Add ProductTag table --
CREATE TABLE productTag(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  FOREIGN KEY (product_id)
  REFERENCES product(id),
  tag_id INT,
  FOREIGN KEY (tag_id)
  REFERENCES tag(id),

);