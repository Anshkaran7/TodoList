const express = require("express");
const userRouter = require("./routes/user.js");
const taskRouter = require("./routes/task.js");
const cookieParser = require("cookie-parser");
const { ErrorMiddlewares } = require("./middlewares/error.js");
const cors = require("cors");

require("dotenv").config({
  path: "./data/config.env",
});
const app = express();
app.use(express.json());
app.use(cookieParser());
//using middlewares

//using Routes

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.get("/", (req, res) => {
  res.send("Nice Working");
});
app.use(ErrorMiddlewares);
module.exports = app;

//browser me hum bas get request ko hi access kr skte post ko nhi sbko access krne ke liye hum postman use krte hai
