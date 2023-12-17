const express = require("express");
const { PORT } = require("./config/config");

const app = express();

require("./config/express")(app);
require("./config/database")();

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
