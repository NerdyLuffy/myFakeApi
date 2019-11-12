const _ = require('lodash');
const express = require('express');
const contactUsRoutes = express.Router();


contactUsRoutes.get("/",async(req,res,next) => {
	res.status(200).json({
		stauts: "Okay"
	});
})


module.exports = contactUsRoutes;