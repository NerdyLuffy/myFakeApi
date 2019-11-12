const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");
let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(morgan("dev"));


//Routes
const singUpRoutes = require('../routes/singUp/signUp.js'); 
const contactUsRoute = require('../routes/contactUs/contactUs.js');

app.use('/signup',singUpRoutes);
app.use('/contactus', contactUsRoute);
module.exports = app