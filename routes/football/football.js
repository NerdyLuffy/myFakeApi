const data = require('../../data/football2018.json');
const _ = require('lodash');
const express = require('express');
const footballRoutes = express.Router();

footballRoutes.get('/', async (req, res) => {
	let footballData = data;
	res.status(200).json({
		football: footballData
	});
});

//stadiums Routes
footballRoutes.get('/stadiums', async (req, res) => {
	let stadiumsData = data.stadiums;
	res.status(200).json({
		stadiums: stadiumsData
	});
});

footballRoutes.get('/stadiums/id/:id', async (req, res) => {
	let stadiumsData = data.stadiums;
	res.status(200).json({
		stadium: stadiumsData.find(stadium => stadium.id == req.params.id)
	});
});

footballRoutes.get('/stadiums/name/:name', async (req, res) => {
	let stadiumsData = data.stadiums;
	res.status(200).json({
		stadium: stadiumsData.find(stadium => stadium.name == req.params.name)
	});
});

//tvchannels Routes
footballRoutes.get('/tvchannels', async (req, res) => {
	let tvchannelsData = data.tvchannels;
	res.status(200).json({
		tvchannels: tvchannelsData
	});
});

footballRoutes.get('/tvchannels/id/:id', async (req, res) => {
	let tvchannelsData = data.tvchannels;
	res.status(200).json({
		tvchannel: tvchannelsData.find(tvchannel => tvchannel.id == req.params.id)
	});
});

footballRoutes.get('/tvchannels/name/:name', async (req, res) => {
	let tvchannelsData = data.tvchannels;
	res.status(200).json({
		tvchannel: tvchannelsData.find(
			tvchannel => tvchannel.name == req.params.name
		)
	});
});

//Teams Routes
footballRoutes.get('/teams', async (req, res) => {
	let teamsData = data.teams;
	res.status(200).json({
		Teams: teamsData
	});
});

footballRoutes.get('/teams/id/:id', async (req, res) => {
	let teamsData = data.teams;
	res.status(200).json({
		Team: teamsData.find(team => team.id == req.params.id)
	});
});

footballRoutes.get('/teams/name/:name', async (req, res) => {
	let teamsData = data.teams;
	res.status(200).json({
		Team: teamsData.find(team => team.name == req.params.name)
	});
});

footballRoutes.get('/teams/fifaCode/:fifaCode', async (req, res) => {
	let teamsData = data.teams;
	res.status(200).json({
		Team: teamsData.find(team => team.fifaCode == req.params.fifaCode)
	});
});

//Groups Routes
footballRoutes.get('/groups', async (req, res) => {
	let groupsData = data.groups;
	res.status(200).json({
		Groups: groupsData
	});
});

footballRoutes.get('/groups/:group', async (req, res) => {
	let param = req.params.group;
	let groupsData = data.groups[param];
	res.status(200).json({
		Group: groupsData
	});
});

//knockout Rounds
footballRoutes.get('/knockouts', async (req, res) => {
	let knockoutData = data.knockout;
	res.status(200).json({
		Knockouts: knockoutData
	});
});

footballRoutes.get('/knockouts/:round', async (req, res) => {
	let param = req.params.round;
	let knockoutData = data.knockout[param];
	res.status(200).json({
		Knockout: knockoutData
	});
});

module.exports = footballRoutes;
