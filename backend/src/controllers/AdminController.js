const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class AdminController {
  static login = (req, res) => {
    const { email, password } = req.body;

    const validationErrors = Joi.object({
      email: Joi.string().max(45).required(),
      password: Joi.string().max(15).required(),
    }).validate({ email, password }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.admin
      .findByEmail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send({ error: "email ou mot de passe incorrect" });
        } else {
          const { id, password: hash } = rows[0];
          try {
            if (await bcrypt.compare(password, hash)) {
              const token = await jwt.sign(
                { id },
                process.env.JWT_AUTH_SECRET,
                { expiresIn: "1h" }
              );

              res
                .cookie("accessToken", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, email });
            } else {
              res
                .status(403)
                .send("L'email ou le mot de passe ne sont pas valides");
            }
          } catch (err) {
            res.status(500).send(`Erreur Interne avec bcrypt ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static browse = (req, res) => {
    models.admin
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static logout = (req, res) => {
    res.clearCookie("accessToken");
    res.sendStatus(204);
  };

  static edit = (req, res) => {
    const admin = req.body;

    admin.id = parseInt(req.params.id, 10);

    models.admin
      .update(admin)
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

  static delete = (req, res) => {
    models.admin
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
module.exports = AdminController;
