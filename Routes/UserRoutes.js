const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");


router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.post("/login", UserController.loginUser);


router.post("/checkout", UserController.addBoughtShows);

module.exports = router;
