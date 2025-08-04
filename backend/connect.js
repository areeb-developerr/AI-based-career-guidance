const mongoose = require("mongoose");

async function ConnectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

module.exports = ConnectDB;
