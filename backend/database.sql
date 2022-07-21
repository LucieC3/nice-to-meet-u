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

CREATE TABLE
    `plant` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `category_id` int NOT NULL,
        `light` int DEFAULT 1,
        `water` int DEFAULT 1,
        `humidity` varchar(255) NOT NULL,
        `image` varchar(255) DEFAULT ""
    ) DEFAULT CHARACTER SET = 'utf8';

CREATE TABLE
    `category` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL
    ) DEFAULT CHARACTER SET = 'utf8';

INSERT INTO
    `admin` (name, email, password)
VALUES (
        "Lucie",
        "lchauvet1094@gmail.com",
        "lulukiki"
    );

ALTER TABLE `plant`
ADD
    FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

INSERT INTO category (name)
VALUES ("Grimpantes"), ("Variégations"), ('Plantes vertes');

INSERT INTO
    `admin` (name, email, password)
VALUES (
        "Lucie",
        "lchauvet1094@gmail.com",
        "lulukiki"
    );

INSERT INTO
    plant (
        name,
        `category_id`,
        light,
        water,
        humidity,
        image
    )
VALUES (
        "Monstera Deliciosa Variegata",
        2,
        2,
        3,
        "moyenne",
        "/src/assets/monsteravariegata.jpg"
    ), (
        "Oxalis Pourpre",
        2,
        3,
        1,
        "moyenne",
        "/src/assets/oxalispourpre.jpg"
    ), (
        "Ctenanthe Burle Marxii",
        1,
        1,
        2,
        "moyenne",
        "/src/assets/ctenanthe.jpg"
    ), (
        "Monstera Adansonii",
        1,
        2,
        3,
        "moyenne",
        "/src/assets/adansonii.jpg"
    ), (
        "Philodendron Micans",
        2,
        3,
        1,
        "moyenne",
        "/src/assets/micans.jpg"
    ), (
        "Pachira Aquatica",
        3,
        2,
        1,
        "moyenne",
        "/src/assets/pachira.jpg"
    ), (
        "Syngonium Neon Robusta",
        2,
        2,
        3,
        "moyenne",
        "/src/assets/syngoneon.jpg"
    ), (
        "Pothos N'Joy",
        3,
        2,
        1,
        "moyenne",
        "/src/assets/njoy.jpg"
    ), (
        "Begonia Maculata",
        2,
        2,
        2,
        "moyenne",
        "/src/assets/begomaculata.jpg"
    );