const router = require("express").Router();

const carController = require("./controllers/car");
const userController = require("./controllers/auth");

router.use("/catalogue", carController);
router.use("/auth", userController);

module.exports = router;
