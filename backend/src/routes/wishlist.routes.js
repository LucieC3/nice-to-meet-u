const express = require("express");
const { WishlistController } = require("../controllers");

const routes = express.Router();

routes.get("/wishlist", WishlistController.browse);
routes.get("/wishlist", WishlistController.read);
routes.put("/wishlist", WishlistController.edit);
routes.post("/wishlist", WishlistController.add);
routes.delete("/wishlist", WishlistController.delete);

module.exports = routes;
