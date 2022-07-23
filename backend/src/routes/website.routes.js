const express = require("express");
const { WebsiteController } = require("../controllers");

const routes = express.Router();

routes.get("/sites-utiles", WebsiteController.browse);
routes.get("/sites-utiles", WebsiteController.read);
routes.put("/sites-utiles", WebsiteController.edit);
routes.post("/sites-utiles", WebsiteController.add);
routes.delete("/sites-utiles", WebsiteController.delete);

module.exports = routes;
