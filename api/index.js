'use strict'

var express = require('express');
var app = express();


app.get('/', function (req,res){
	res.send('Welcome, This is an API service for i3 Window manager. ')

});

app.get('/api/v0/ip', function(req,res){
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(ip)
	res.send(ip)
	res.end()
});


app.listen(80, function(){
	console.log('Listening on port 8000')
});