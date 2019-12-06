const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(morgan('dev'));

const signUpRoutes = require('../routes/signUp/signUp.js');
const loginRoutes = require('../routes/login/logIn.js');
const sessionRoutes = require('../routes/session.js');
const contactUsRoutes = require('../routes/contactUs/contactUs.js');
const footballRoutes = require('../routes/football/football.js');
const carRoutes = require('../routes/cars/cars.js');
const usersRoutes = require('../routes/users/users.js');

app.all('/api/*', [
	(req, res, next) => {
		let delay = req.body.delay || 0;
		_.delay(() => {
			return next();
		}, delay);
	}
]);

app.use('/api/signup', signUpRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/contactus', contactUsRoutes);
app.use('/api/football', footballRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
