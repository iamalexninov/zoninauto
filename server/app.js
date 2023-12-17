const express = require("express");
const { PORT } = require("./config/config");
const routes = require("./routes");

const app = express();

require("./config/express")(app);
require("./config/database")();

app.use(routes);

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
