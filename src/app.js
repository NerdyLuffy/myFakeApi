const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");
let app = express();

app.use(cors());
app.use(morgan("dev"));

module.exports = app