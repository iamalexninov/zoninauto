const router = require("express").Router();
const carService = require("../services/car");

router.get("/", (req, res) => {});

router.post("/", async (req, res) => {
  const data = {
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    price: req.body.price,
    mileage: req.body.mileage,
    transmission: req.body.transmission,
    horsePower: req.body.horsePower,
    torque: req.body.torque,
    fuelType: req.body.fuelType,
    features: req.body.features,
  };

  try {
    const car = await carService.createCar(data);
    res.status(201).json(car);
  } catch (error) {
    // TODO: insert errors
    console.error(error);
    res.status(401).json(error);
  }
});

module.exports = router;