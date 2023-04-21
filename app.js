const express = require("express");
const userRouter = require("./routes/user.js");
const taskRouter = require("./routes/task.js");
const cookieParser = require("cookie-parser");

require("dotenv").config({
  path: "./data/config.env",
});
const app = express();
app.use(express.json()); 
app.use(cookieParser())
//using middlewares

//using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter)

app.get("/", (req, res) => {
  res.send("Nice Working");
});

module.exports = app;

//browser me hum bas get request ko hi access kr skte post ko nhi sbko access krne ke liye hum postman use krte hai
