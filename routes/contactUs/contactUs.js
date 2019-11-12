const express = require('express');
const contactUsRoutes = express.Router();
const moment = require('moment');
const validation = require('../../utils/contactUsValidation.js');

contactUsRoutes.post("/", validation ,async(req,res,next) => {
	res.status(200).json({
		"message": "Form subimitted successfully at " + moment().format()
	});
});


module.exports = contactUsRoutes;