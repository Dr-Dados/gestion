const express = require("express");

const {
  signupUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

//create a user
router.post("/signup", signupUser);

//login a user
router.post("/login", loginUser);

//get all users
router.get("/", getUsers);

module.exports = router;
