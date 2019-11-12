const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");
let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("dev"));


//Routes 
const contactUsRoute = require('../routes/contactUs/contactUs.js');

app.use('/contactUs', contactUsRoute);
module.exports = app