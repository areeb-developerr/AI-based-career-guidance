require("dotenv").config();
const express = require("express");
const ConnectDB = require("./connect");

const app = express();
ConnectDB(process.env.MONGO_URI);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
