const express = require("express");

const {
  signupUser,
  loginUser,
  getUsers,
  addUser,
} = require("../controllers/userController");

const router = express.Router();

//create a user
router.post("/signup", signupUser);

//login a user
router.post("/login", loginUser);

//get all users
router.get("/", getUsers);

//add user
router.post("/", addUser);

//add many users
router.post("/many", (req, res) => {
  console.log("req.body", req.body);
  res.status(200).json({ message: "users added" });
});

module.exports = router;
