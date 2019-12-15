const userData = require('../../data/users.json');
const _ = require('lodash');
const moment = require('moment');
const express = require('express');
const usersRoutes = express.Router();

usersRoutes.get('/', async (req, res) => {
	res.status(200).json({
		Users: userData
	});
});

usersRoutes.get('/:id', async (req, res) => {
	let userId = req.params.id;
	res.status(200).json({
		User: userData.find(user => user.id == userId)
	});
});

usersRoutes.patch('/update', async (req, res) => {
	let userId = req.get('id') || req.body.id;
	if (_.isNil(userId)) {
		res.status(400).json({
			reason: 'UserId is null or undefined',
			errorMessage: 'User Id is required.'
		});
		return;
	}
	console.log(req.body);
	res.status(201).json({
		OldValue: userData.find(user => user.id == userId),
		NewValue: req.body,
		UpdatedAt: moment().format()
	});
});

usersRoutes.post('/', async (req, res) => {
	res.status(200).json({
		userData: req.body,
		createdAt: moment().format(),
		UpdatedAt: moment().format()
	});
});

module.exports = usersRoutes;
