const router = require("express").Router();
const authService = require("../services/auth");
const mapErrors = require("../utils/mapper");

router.get("/", async (req, res) => {
  const users = await authService.getUsers();
  res.json(users);
});

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if (email === "" || username === "" || password === "") {
      throw new Error("Field is required.");
    }

    const result = await authService.register(email, username, password);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    console.error(error);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.get("/logout", (req, res) => {
  authService.logout();
  res.status(204).end();
});

module.exports = router;
