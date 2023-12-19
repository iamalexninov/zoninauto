const Car = require("../models/Car");

async function createCar(data) {
  const car = new Car({
    brand: data.brand,
    model: data.model,
    year: data.year,
    color: data.color,
    price: data.price,
    mileage: data.mileage,
    transmission: data.transmission,
    horsePower: data.horsePower,
    torque: data.torque,
    fuelType: data.fuelType,
    features: data.features,
  });

  await car.save();

  return car;
}

async function getCars() {
  return await Car.find({});
}

async function getCar(id) {
  return await Car.findById(id);
}

async function updateCar(id, data) {
  const car = await Car.findById(id);
  if (!car) throw new Error("Car doesn't exist.");

  car.brand = data.brand;
  car.model = data.model;
  car.year = data.year;
  car.color = data.color;
  car.price = data.price;
  car.mileage = data.mileage;
  car.transmission = data.transmission;
  car.horsePower = data.horsePower;
  car.torque = data.torque;
  car.fuelType = data.fuelType;
  car.features = data.features;

  await car.save();
  return car;
}

module.exports = {
  createCar,
  getCars,
  getCar,
  updateCar,
};
