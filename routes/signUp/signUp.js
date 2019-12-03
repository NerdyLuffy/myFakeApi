const express = require('express');
const signUpRoutes = express.Router();
const validation = require('../../utils/validations/signUpValidation.js');
const moment = require('moment');
const uuid = require('uuid/v4');

signUpRoutes.post('/', validation, async (req, res, next) => {
	let subStatus = req.body.edm || false;
	res.status(201).json({
		Data: req.body,
		Message: 'User Created Successfully.',
		UserId: uuid(),
		CreatedAt: moment.now(),
		NextSteps: 'Please verify your email address',
		EmailValidation: 'Pending',
		Subscribed: subStatus
	});
});

module.exports = signUpRoutes;
