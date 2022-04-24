const express = require("express");

const ratesController = require("./controllers/ratesController");

const zonesController = require("./controllers/zonesController");

const app = express();

app.use(express.json());

app.use("/rates", ratesController);
app.use("/zones", zonesController);

module.exports = app;
