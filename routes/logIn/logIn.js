const express = require('express');
const loginInRoutes = express.Router();
const token = require('../../utils/jwt/toekns.js');
const validation = require('../../utils/validations/loginValidation.js');


loginInRoutes.post('/', validation, async(req,res,next) => {
	let blockedStatus = req.body.blocked || false;
	if(req.body.verified)
	{
		if(blockedStatus)
		{
			res.status(401).json({
				"reason":"Account has been blocked",
				"errorMessage":"Please contact us with error code 401-Acc-Blocked."
			});	
			return;
		}
		let playload = {
			"userName" : req.body.userName,
			"password" : req.body.password,
			"website" : "www.myfakeapi.com"
		}
		let session = await token.genToken(playload);
		res.status(200).json({
			session
		});
	}
	else
	{
		res.status(401).json({
			"reason":"Email Address not verified",
			"errorMessage":"Please verify your email to activate your account."
		});	
	}
});


module.exports = loginInRoutes;