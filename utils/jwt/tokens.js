const jwt = require('jsonwebtoken');

let secretKey = 'wSX#fUo7rVzSZD';

module.exports = {
	genToken,
	verifyToken
};

async function genToken(payload) {
	let token = jwt.sign(payload, secretKey, { expiresIn: '30m' });
	return token;
}

async function verifyToken(token) {
	let response = jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			let err = 'Invalid/Expired Token.';
			return err;
		} else {
			return decoded;
		}
	});
	return response;
}
