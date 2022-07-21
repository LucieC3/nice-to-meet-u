CREATE DATABASE IF NOT EXISTS `nicetomeetu`;

USE `nicetomeetu`;

DROP TABLE IF EXISTS `user`;

CREATE TABLE
    `admin` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255),
        `email` varchar(255),
        `password` varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `admin` (name, email, password)
VALUES (
        "Lucie",
        "lchauvet1094@gmail.com",
        "lulukiki"
    );