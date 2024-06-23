const User = require("../models/userModel");
const JWT = require("jsonwebtoken");

const createToken = (_id, role) => {
  return JWT.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id, user.role);
    res.status(201).json({ email, token, role: user.role });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//signup
const signupUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    role,
    status,
    fonction,
    gamme,
    address,
    city,
  } = req.body;
  try {
    const user = await User.signup(
      name,
      email,
      password,
      phone,
      role,
      status,
      fonction,
      gamme,
      address,
      city
    );
    const token = createToken(user._id);
    res.status(201).json({
      email,
      token,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = { signupUser, loginUser, getUsers };
