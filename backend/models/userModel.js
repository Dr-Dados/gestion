const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    status: { type: String, required: true, default: "active" },
    fonction: { type: String, required: true },
    gamme: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

// static method
userSchema.statics.signup = async function (
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
) {
  // validation
  if (!email || !password) throw new Error("Email and password are required");
  if (!validator.isEmail(email)) throw new Error("Invalid email");
  if (!validator.isStrongPassword(password))
    throw new Error("Password is not strong enough");

  const exists = await this.findOne({ email });
  if (exists) throw new Error("User already exists");
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create and return the user
  const user = await this.create({
    name,
    email,
    password: hash,
    phone,
    role,
    status,
    fonction,
    gamme,
    address,
    city,
  });
  return user;
};
// login static method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) throw new Error("Email and password are required");

  // check if the user exists
  const user = await this.findOne({ email });
  if (!user) throw new Error("Email not found");

  // compare the password
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
