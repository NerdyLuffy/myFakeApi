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
const loginRouter = require('../routes/logIn/logIn.js');
const sessionRoutes = require('../routes/session.js'); 
const contactUsRoute = require('../routes/contactUs/contactUs.js');

app.use('/signup',singUpRoutes);
app.use('/login',loginRouter);
app.use('/session',sessionRoutes);
app.use('/contactus', contactUsRoute);

module.exports = app