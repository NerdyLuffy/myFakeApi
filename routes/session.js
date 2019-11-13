const _ = require('lodash');
const express = require('express');
const sessionRoutes = express.Router();
const token = require('../utils/jwt/tokens.js');

sessionRoutes.post('/', async (req, res, next) => {
	if (_.isNil(req.body.token)) {
		res.status(400).json({
			reason: 'jwt Token',
			errorMessage: 'JWT token is missing.'
		});
	} else {
		let session = await token.verifyToken(req.body.token);
		res.status(200).json({
			session
		});
	}
});

module.exports = sessionRoutes;
