const router = require("express").Router();
const authService = require("../services/auth");

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
  } catch (error) {
    // TODO: set errors
    console.error(error);
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    // TODO: set errors
    console.error(error);
    res.status(400).json(error);
  }
});

router.get("/logout", (req, res) => {
  authService.logout();
  res.status(204).end();
});

module.exports = router;
