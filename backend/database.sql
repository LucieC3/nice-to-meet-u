DROP DATABASE `nicetomeetu`;

CREATE DATABASE IF NOT EXISTS `nicetomeetu`;

USE `nicetomeetu`;

DROP TABLE IF EXISTS `admin`;

CREATE TABLE
    `admin` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255),
        `pseudo` varchar(255),
        `password` varchar(255)
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    `admin` (name, pseudo, password)
VALUES (
        "Lucie",
        "Lulupesto",
        "$2b$10$xKUJthEqZz0Ybd3aCKZ.4."
    );

DROP TABLE IF EXISTS `plant`;

CREATE TABLE
    `plant` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `category_id` int NOT NULL,
        `light` varchar(255) NOT NULL,
        `water` varchar(255) NOT NULL,
        `humidity` varchar(255) NOT NULL,
        `image` varchar(255) DEFAULT ""
    ) DEFAULT CHARACTER SET = 'utf8';

INSERT INTO
    `plant` (
        name,
        `category_id`,
        light,
        water,
        humidity,
        image
    )
VALUES (
        "Monstera Deliciosa Variegata",
        3,
        "Lumineux - Pas de soleil direct (sauf matin ou fin de journée)",
        "1 fois par semaine au printemps/été - Bien laisser sécher le terreau",
        "Brumiser régulièrement",
        "/src/assets/monsteravariegata.jpg"
    ), (
        "Oxalis Pourpre",
        2,
        "Très lumineux - Soleil direct toléré",
        "Souvent - La terre doit toujours être humide",
        "Brumiser si les feuilles deviennent brunes",
        "/src/assets/oxalispourpre.jpg"
    ), (
        "Ctenanthe Burle Marxii",
        2,
        "Lumineux - Jamais de soleil direct",
        "Maintenir le terreau humide",
        "Brumiser régulièrement",
        "/src/assets/ctenanthe.jpg"
    ), (
        "Monstera Adansonii",
        1,
        "Lumineux - Pas de soleil direct",
        "Maintenir le terreau humide",
        "Brumiser régulièrement",
        "/src/assets/adansonii.jpg"
    ), (
        "Philodendron Micans",
        1,
        "Lumineux - Pas de soleil direct",
        "Maintenir le terreau humide",
        "Eviter de brumiser",
        "/src/assets/micans.jpg"
    ), (
        "Pachira Aquatica",
        3,
        "Très lumineux - Soleil direct toléré",
        "Maintenir le terreau humide",
        "Brumiser occasionnellement",
        "/src/assets/pachira.jpg"
    ), (
        "Syngonium Neon Robusta",
        2,
        "Lumineux - Pas de soleil direct",
        "1 à 2 fois par semaine",
        "Brumiser régulièrement",
        "/src/assets/syngoneon.jpg"
    ), (
        "Pothos N 'Joy",
        2,
        "Lumineux - Pas de soleil direct",
        "Maintenir le terreau humide",
        "Brumiser régulièrement",
        "/src/assets/njoy.jpg"
    ), (
        "Begonia Maculata",
        2,
        "Lumineux - Pas de soleil direct",
        "Environ une fois par semaine",
        "brumiser régulièrement",
        "/src/assets/begomaculata.jpg"
    );

DROP TABLE IF EXISTS `category`;

CREATE TABLE
    `category` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL
    );

INSERT INTO `category` (name)
VALUES ("Grimpantes"), ("Variégations"), ("Plantes vertes");

DROP TABLE IF EXISTS `website`;

CREATE TABLE
    `website` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        `link` varchar(255) NOT NULL
    );

INSERT INTO
    `website` (name, link)
VALUES (
        "House Party - Plantes rares",
        "https://www.houseparty-plantes.com/boutique"
    ), (
        "Casa Botanica",
        "https://casa-botanica.com"
    ), (
        "Palmaris",
        "http://www.palmaris.org"
    ), (
        "Noé Bouture",
        "https://noebouture.com"
    ), (
        "Plant and stories",
        "https://plantandstories.com"
    ), (
        "Boutures et moi",
        "https://www.bouturesetmoi.fr"
    ), (
        "Le Goût des Plantes",
        "https://legoutdesplantes.com"
    ), (
        "Hanko Jungle",
        "https://www.hanko-jungle.com"
    ), (
        "Plnts",
        "https://plnts.com/fr"
    ), (
        "Plantlovers",
        "https://www.plantlovers.eu"
    ), (
        "Plantes pour tous",
        "https://plantespourtous.co"
    ), (
        "Maison Bouture",
        "https://maisonbouture.com"
    );

DROP TABLE IF EXISTS `wishlist`;

CREATE TABLE
    `wishlist` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(255) NOT NULL
    );

INSERT INTO `wishlist` (name)
VALUES (
        "Philodendron White Princess"
    ), ("Philodendron Pink Princess"), (
        "Senecio Rowleyanus Variegata"
    ), ("Scindapsus Treubii Dark"), ("Syngonium Mojito"), ("Columnea Arguta"), ("Caladium - toutes variétés"), ("Philodendron Majesty"), ("Monstera Standleyana"), ("Syngonium Wendlandii"), ("Ctenanthe Amagris"), ("Syngonium Albo variegata");

ALTER TABLE `plant`
ADD
    FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);