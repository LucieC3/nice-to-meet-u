const express = require("express");

const { AdminController } = require("./controllers");

const router = express.Router();
const { authorization } = require("./middlewares/authMiddleware");

router.get("/admin", authorization, AdminController.browse);
router.post("/admin/login", AdminController.login);

module.exports = router;
