const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(morgan('dev'));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../public/')));

//Routes
const singUpRoutes = require('../routes/singUp/signUp.js');
const loginRouter = require('../routes/logIn/logIn.js');
const sessionRoutes = require('../routes/session.js');
const contactUsRoute = require('../routes/contactUs/contactUs.js');
const footballRoutes = require('../routes/football/football.js');

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname+'../public/index.html'));
})

app.use('/api/signup', singUpRoutes);
app.use('/api/login', loginRouter);
app.use('/api/session', sessionRoutes);
app.use('/api/contactus', contactUsRoute);
app.use('/api/football', footballRoutes);

module.exports = app;
