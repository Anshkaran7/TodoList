const { default: mongoose } = require("mongoose");

const mongoDB=() => mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "BackendAPIs",
  })
  .then((c) => console.log(`Database connected with ${c.connection.host}`))
  .catch((e) => console.log(e));

module.exports = mongoDB;
