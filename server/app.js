const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");
const auth = require("./middlewares/auth");
const routes = require("./routes");
const errorHandling = require("./middlewares/errorHandling");

const app = express();

require("./config/database")(app);
app.use(cors());
app.use(express.json());
app.use(auth());

app.use(routes);

app.use(errorHandling());

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
