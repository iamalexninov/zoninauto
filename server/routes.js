const router = require("express").Router();

const carController = require("./controllers/car");

router.use("/catalogue", carController);

module.exports = router;
