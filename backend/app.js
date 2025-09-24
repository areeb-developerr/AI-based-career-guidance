require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const ConnectDB = require("./connect");
const UserRouter = require("./routes/UserRouter");
const AddUser = require("./middlewares/AddUser");

const app = express();
ConnectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(cookieParser());
app.use(AddUser);
app.use("/api/user", UserRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
