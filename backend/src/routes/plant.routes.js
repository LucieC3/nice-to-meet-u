const express = require("express");
const { CategoryController, PlantController } = require("../controllers");

const routes = express.Router();

routes.get("/plantes", PlantController.browse);
routes.get("/plantes/:id", PlantController.read);
routes.put("/plantes/:id", PlantController.edit);
routes.post("/ajouter-une-plante", PlantController.add);
routes.delete("/plantes/:id", PlantController.delete);

routes.get("/categories", CategoryController.browse);

module.exports = routes;
