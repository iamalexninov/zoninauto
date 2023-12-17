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

module.exports = {
  createCar,
  getCars,
  getCar,
};
