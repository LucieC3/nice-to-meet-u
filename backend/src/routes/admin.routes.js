const express = require("express");
const { AdminController } = require("../controllers");

const routes = express.Router();
const { authorization } = require("../middlewares/authMiddleware");

routes.get("/admin", authorization, AdminController.browse);
routes.post("/admin", AdminController.login);
routes.get("/admin/logout", authorization, AdminController.logout);
routes.put("/admin/:id", AdminController.edit);
routes.delete("/admin/:id", AdminController.delete);

module.exports = routes;
