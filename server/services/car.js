const Car = require("../models/Car");

async function createCar(data) {

    console.log(data)
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

  return car;
}

module.exports = {
  createCar,
};
