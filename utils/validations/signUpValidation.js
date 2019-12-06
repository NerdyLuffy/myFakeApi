const _ = require('lodash');

module.exports = signUpValidations;

async function signUpValidations(req, res, next) {
	let errors = [];
	if (req.body) {
		if (!_.isString(req.body.firstName)) {
			errors.push({
				reason: 'firstName',
				errorMessage: 'First name is required.'
			});
		}
		if (!_.isString(req.body.lastName)) {
			errors.push({
				reason: 'lastName',
				errorMessage: 'Last name is required.'
			});
		}
		if (!_.isString(req.body.country)) {
			errors.push({
				reason: 'country',
				errorMessage: 'Country is required.'
			});
		}
		if (!_.isNumber(req.body.mobile)) {
			errors.push({
				reason: 'mobile',
				errorMessage: 'Please provide a valid mobile number.'
			});
		}
		if (errors.length > 0) {
			res.status(400).json({
				Errors: errors
			});
		} else {
			return next();
		}
	}
}
