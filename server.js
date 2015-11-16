'use strict';

var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/ping', function(req, res) {
	res.status(200).send({message: "PONG"});
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
	console.log('Express server listening on port ' + port);
});