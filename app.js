const express = require("express");

const app = express();

const router = require("./Src/routes/api");

app.use("/api", router);

module.exports = app;
