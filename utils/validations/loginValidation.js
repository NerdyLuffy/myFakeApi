const _ = require('lodash');

module.exports = loginValidations;

async function loginValidations(req,res,next)
{
	if(req.body)
	{
		let errors = [];
		if(!_.isString(req.body.userName))
		{
			errors.push({
				"reason":"userName",
				"errorMessage":"User Name is required."
			});
		}
		if(!_.isString(req.body.password))
		{
			errors.push({
				"reason":"password",
				"errorMessage":"Password is required."
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