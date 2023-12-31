const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");
const User = require("../models/User");

// TODO: make a research
const blacklist = [];

const getUsers = async () => await User.find({});

async function register(username, email, password) {
  const existing = await User.findOne({ email: new RegExp(`^${email}$`, "i") });
  if (existing) throw new Error("User already exists.");

  const user = new User({
    username,
    email,
    password: await bcrypt.hash(password, SALT_ROUNDS),
  });

  await user.save();

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });
  if (!user) throw new Error("User doesn't exists. Please Sign Up.");

  const hasMatch = await bcrypt.compare(password, user.password);
  if (!hasMatch)
    throw new Error("Incorrect Email or Password. Please, Try Again.");

  return createSession(user);
}

function logout(token) {
  blacklist.push(token);
}

function createSession(user) {
  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    type: user.type,
    accessToken: jwt.sign({ _id: user._id, email: user.email }, SECRET),
  };
}

function verifySession(token) {
  const payload = jwt.verify(token, SECRET);

  return {
    _id: payload._id,
    email: payload.email,
    username: payload.username,
    token,
  };
}

module.exports = {
  getUsers,
  register,
  login,
  logout,
  verifySession,
};
