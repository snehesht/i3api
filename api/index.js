'use strict'

var express = require('express');
var app = express();


app.get('/', function (req,res){
	res.send('Welcome, This is an API service for i3 Window manager. see https://github.com/snehesht/i3api')

});

// Returns IP address
app.get('/ip', function(req,res){
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.send(ip)
	res.end()
});

// Returns the Weather

// Start the app
app.listen(80, function(){
	console.log('Listening on port 80')
});