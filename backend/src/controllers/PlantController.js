// const multer = require("multer");
// const upload = multer({ dest: "tmp/" });
// const fs = require("fs");
const models = require("../models");

class PlantController {
  static browse = (req, res) => {
    models.plant
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.plant
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const plant = req.body;

    plant.id = parseInt(req.params.id, 10);

    models.plant
      .update(plant)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const plant = req.body;

    models.plant
      .insert(plant)
      .then(([result]) => {
        res.status(201).send({ ...plant, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });

    /* upload.single("mon-image"),
      function (req, res, next) {
        fs.rename(
          req.file.path,
          `src/assets/${req.file.originalname}`,
          function (err) {
            if (err) {
              res.send("problème durant le déplacement");
            } else {
              res.send("Fichier uploadé avec succès");
            }
          }
        );
      }; */
  };

  static delete = (req, res) => {
    models.category
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = PlantController;
