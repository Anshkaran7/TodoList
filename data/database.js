const { default: mongoose } = require("mongoose");

const mongoDB=() => mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "BackendAPIs",
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

module.exports = mongoDB;
