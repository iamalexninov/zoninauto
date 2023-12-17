const mongoose = require("mongoose");
const { DB_URL } = require("./config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("Connected to DB...");
  } catch (error) {
    console.error(error);
    console.log("Can't connect to DB...");
  }
};
