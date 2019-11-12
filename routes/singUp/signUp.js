const express = require('express');
const signUpRoutes = express.Router();
const validation = require('../../utils/validations/singUpValidation.js');
const moment = require('moment');

signUpRoutes.post("/",validation,async(req,res,next) => {
	let subStatus = req.body.edm || false ;
	res.status(201).json({
		"Data": req.body,
		"Message": "User Created Successfully.",
		"CreatedAt": moment.now(),
		"NextSteps":"Please verify your email address",
		"EmailValidation" : "Pending",
		"Subscribed": subStatus
	});
});

module.exports = signUpRoutes;