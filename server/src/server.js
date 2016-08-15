const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const numberBetween = (min, max) => Math.floor(Math.random() * max) + min;

app.use(bodyParser.json())

app.get('/db/items', (req, res) => {
	setTimeout(() => {
	    res.json([{ id: 234 }]);
	}, numberBetween(0,1500));
});

app.get('/thing/:id', (req, res) => {
	setTimeout(() => {
	    res.json({ id: req.params.id, changes: [] });
	}, numberBetween(0,1500));
});

app.post('/email/send', (req, res) => {
	setTimeout(() => {
	    res.json(req.body);
	}, numberBetween(1500,7500));
});

module.exports = app;