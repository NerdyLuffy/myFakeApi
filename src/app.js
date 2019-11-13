const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(morgan('dev'));

//Routes
const singUpRoutes = require('../routes/singUp/signUp.js');
const loginRouter = require('../routes/logIn/logIn.js');
const sessionRoutes = require('../routes/session.js');
const contactUsRoute = require('../routes/contactUs/contactUs.js');
const footballRoutes = require('../routes/football/football.js');
const carRoutes = require('../routes/cars/cars.js');
const usersRoutes = require('../routes/users/users.js');

app.use('/api/signup', singUpRoutes);
app.use('/api/login', loginRouter);
app.use('/api/session', sessionRoutes);
app.use('/api/contactus', contactUsRoute);
app.use('/api/football', footballRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
