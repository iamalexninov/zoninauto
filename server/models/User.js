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
    required: [true, "Password is required."],
    trim: true,
    minlength: [6, "Password must be at least 6 characters long."],
    validate: {
      validator: function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
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
