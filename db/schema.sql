DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;

USE pokemon_db;

CREATE TABLE team
(
  id INT NOT NULL AUTO_INCREMENT,
  pokemon_name VARCHAR(20) NOT NULL,
  picked BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);