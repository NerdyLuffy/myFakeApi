const _ = require('lodash');

module.exports = singUpValidations;

async function singUpValidations(req,res,next)
{
	let errors = [];
	if(req.body)
	{
		if(!_.isString(req.body.firstName))
		{
			errors.push({
				"reason":"firstName",
				"errorMessage":"firstName is required."
			});
		}
		if(!_.isString(req.body.lastName))
		{
			errors.push({
				"reason":"lastName",
				"errorMessage":"lastName is required."
			});
			
		}
		if(!_.isString(req.body.country))
		{
			errors.push({
				"reason":"country",
				"errorMessage":"Country is required."
			});
			
		}
		if(!_.isNumber(req.body.mobile))
		{
			errors.push({
				"reason":"mobile",
				"errorMessage":"Please provide valid mobile number."
			});
		}
		if(errors.length > 0)
		{
			res.status(400).json({
				"Errors": errors
			});
		}
		else
		{
			return next();
		}
	}
}