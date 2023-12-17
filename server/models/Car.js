const { Schema, Types, model } = require("mongoose");

const carSchema = new mongoose.Schema({
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
    require:[true,'Price is required.']
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
  engine: {
    type: String,
    required: [true, "Engine details are required."],
    trim: true,
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
  owner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Car = mongoose.model("Car", carSchema);
