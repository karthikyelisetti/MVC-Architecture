const express = require("express");
const UserRouter = express.Router();

const { addUser, userLogin } = require("../controllers/UserController");

UserRouter.post("/signup", addUser);
UserRouter.post("/login/:username", userLogin);


module.exports = UserRouter;