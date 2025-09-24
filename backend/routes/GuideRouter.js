const express = require("express");

const GuideRouter = express.Router();

GuideRouter.post("/", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = GuideRouter;
