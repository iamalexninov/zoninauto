const router = require("express").Router();

const carController = require("./controllers/car");
const userController = require("./controllers/auth");

router.use("/api/cars", carController);
// TODO: E-Shop 
// router.use("/api/autoparts", carController);
router.use("/api/users", userController);

module.exports = router;
