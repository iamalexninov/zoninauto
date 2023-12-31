const { Schema, Types, model } = require("mongoose");

const carSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Brand is required."],
    trim: true,
  },
  model: {
    type: String,
    required: [true, "Model is required."],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year is required."],
    min: [1900, "Please enter a valid year."],
    max: [new Date().getFullYear() + 1, "Please enter a valid year."],
  },
  color: {
    type: String,
    required: [true, "Color is required."],
    trim: true,
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Price cannot be negative."],
    require: [true, "Price is required."],
  },
  mileage: {
    type: Number,
    required: [true, "Mileage is required."],
    min: [0, "Mileage cannot be negative."],
  },
  transmission: {
    type: String,
    enum: ["manual", "automatic", "semiautomatic"],
    required: [true, "Transmission is required."],
  },
  horsePower: {
    type: Number,
    min: [0, "Horsepower cannot be negative"],
    required: [true, "Horse Powers are required."],
  },
  torque: {
    type: Number,
    min: [0, "Torque cannot be negative"],
    required: [true, "Torque is required."],
  },
  fuelType: {
    type: String,
    enum: ["gasoline", "diesel", "electric", "hybrid"],
    required: [true, "Type of the Fuel is required."],
  },
  features: [
    {
      type: String,
      trim: true,
    },
  ],
  owner: [{ type: Types.ObjectId, ref: "User" }],
});

const Car = model("Car", carSchema);

module.exports = Car;
