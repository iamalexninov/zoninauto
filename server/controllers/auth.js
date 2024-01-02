const router = require("express").Router();
const authService = require("../services/auth");

router.get("/", async (req, res) => {
  const users = await authService.getUsers();
  res.json(users);
});

router.post("/register", async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    if(email === null || username === null || password === null) {
      throw { message: "All fields are required." };
    }
    if (password.length < 5) {
      throw { message: "Password must be at least 5 characters long." };
    }

    const result = await authService.register(username, email, password);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    console.error(err);
    const error = mapErrors(err);
    res.status(400).json({ message: error });
  }
});

router.get("/logout", (req, res) => {
  authService.logout();
  res.status(204).end();
});

module.exports = router;
