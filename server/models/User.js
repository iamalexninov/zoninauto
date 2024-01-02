const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  username: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
  type: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdCars: [{ type: Types.ObjectId, ref: "Car" }],
  createdParts: [{ type: Types.ObjectId, ref: "Autopart" }],
});

const User = model("User", userSchema);

module.exports = User;
