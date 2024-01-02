const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");
const auth = require("./middlewares/auth");
const routes = require("./routes");
const errors = require("./middlewares/errorHandling");

const app = express();

require("./config/database")();
app.use(cors());
app.use(express.json());
app.use(auth());

app.use(routes);

app.use(errors());

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
