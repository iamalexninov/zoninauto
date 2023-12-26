const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUNDS, SECRET } = require("../config/config");
const User = require("../models/User");

const blacklist = [];

async function register(email, username, password) {
  const existing = await User.findOne({ email: new RegExp(`^${email}$`, "i") });

  if (existing) {
    throw new Error("User already exists.");
  }

  const user = new User({
    email,
    username,
    password: await bcrypt.hash(password, SALT_ROUNDS),
  });

  await user.save();

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email: new RegExp(`^${email}$`, "i") });

  if (!user) {
    throw new Error("Incorrect Email or Password.");
  }

  const hasMatch = await bcrypt.compare(password, user.password);

  if (!hasMatch) {
    throw new Error("Incorrect Email or Password.");
  }

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
    accessToken: jwt.sign(
      { _id: user._id, email: user.email, type: user.type },
      SECRET
    ),
  };
}

function verifySession(token) {
  const payload = jwt.verify(token, SECRET);

  return {
    _id: payload._id,
    email: payload.email,
    type: payload.type,
    token,
  };
}

module.exports = {
  register,
  login,
  logout,
  verifySession,
};
