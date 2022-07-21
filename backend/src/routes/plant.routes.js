const express = require("express");
const {
  CategoryController,
  PlantController,
} = require("../controllers/PlantController");

const routes = express.Router();

routes.get("/plants", PlantController.browse);
routes.get("/plants/:id", PlantController.read);
routes.put("/plants/:id", PlantController.edit);
routes.post("/plants", PlantController.add);
routes.delete("/plants/:id", PlantController.delete);

routes.get("/categories", CategoryController.browse);

module.exports = routes;
