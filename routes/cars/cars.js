const carData = require('../../data/cars.json');
const _ = require('lodash');
const express = require('express');
const carRoutes = express.Router();

carRoutes.get('/', async (req, res) => {
	res.status(200).json({
		cars: carData
	});
});

carRoutes.get('/:id', async (req, res) => {
	let carId = req.params.id;
	let car = carData.find(car => car.id == carId);
	if(car) {
		res.status(200).json({
			Car: car
		});
	}
	else {
		res.status(400).json({
			reason: 'Invalid ID',
			errorMessage: 'Please provide a Valid ID.',
			hint: 'Get /api/cars/ to see all the vaild ID of the cars'
		});
	}

	
});

carRoutes.get('/name/:name', async (req, res) => {
	let name = req.params.name;
	if (_.isNil(name)) {
		res.status(400).json({
			reason: 'name is null or undefined',
			errorMessage: 'Car Name is required.'
		});
	} else {
		var results = [];
		for (var i = 0; i < carData.length; i++) {
			if (carData[i].car == name) {
				results.push(carData[i]);
			}
		}
		if(results.length > 0) {
			res.status(200).json({
				Cars: results
			});
		}
		else {
			res.status(400).json({
				reason: 'Invalid ID',
				errorMessage: 'Please provide a Valid ID.',
				hint: 'Get /api/cars/ to see all the vaild ID of the cars'
			});
		}
		
	}
});

carRoutes.get('/model/:model', async (req, res) => {
	let model = req.params.model;
	if (_.isNil(model)) {
		res.status(400).json({
			reason: 'model is null or undefined',
			errorMessage: 'Car model is required.'
		});
	} else {
		var results = [];
		for (var i = 0; i < carData.length; i++) {
			if (carData[i].car_model == model) {
				results.push(carData[i]);
			}
		}
		if(results.length > 0) {
			res.status(200).json({
				Cars: results
			});
		}
		else {
			res.status(400).json({
				reason: 'Invalid ID',
				errorMessage: 'Please provide a Valid ID.',
				hint: 'Get /api/cars/ to see all the vaild ID of the cars'
			});
		}
	}
});

carRoutes.get('/color/:color', async (req, res) => {
	let color = req.params.color;
	if (_.isNil(color)) {
		res.status(400).json({
			reason: 'color is null or undefined',
			errorMessage: 'Car color is required.'
		});
	} else {
		var results = [];
		for (var i = 0; i < carData.length; i++) {
			if (carData[i].car_color == color) {
				results.push(carData[i]);
			}
		}
		if(results.length > 0) {
			res.status(200).json({
				Cars: results
			});
		}
		else {
			res.status(400).json({
				reason: 'Invalid ID',
				errorMessage: 'Please provide a Valid ID.',
				hint: 'Get /api/cars/ to see all the vaild ID of the cars'
			});
		}
	}
});

carRoutes.get('/year/:year', async (req, res) => {
	let year = req.params.year;
	let queryString = req.query;
	let query = Object.values(queryString)[0];
	if (_.isNil(year)) {
		res.status(400).json({
			reason: 'year is null or undefined',
			errorMessage: 'Car year is required.'
		});
	} else {
		var results = [];
		for (var i = 0; i < carData.length; i++) {
			if (_.isNil(query)) {
				if (carData[i].car_model_year == year) {
					results.push(carData[i]);
				}
			} else if (_.isEqual(query, 'gt')) {
				if (carData[i].car_model_year > year) {
					results.push(carData[i]);
				}
			} else {
				if (carData[i].car_model_year < year) {
					results.push(carData[i]);
				}
			}
		}
		if(results.length > 0) {
			res.status(200).json({
				Cars: results
			});
		}
		else {
			res.status(400).json({
				reason: 'Invalid ID',
				errorMessage: 'Please provide a Valid ID.',
				hint: 'Get /api/cars/ to see all the vaild ID of the cars'
			});
		}
	}
});

module.exports = carRoutes;
