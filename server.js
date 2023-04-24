const app = require("./app.js");
const mongoDB = require("./data/database.js");

mongoDB();
app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});