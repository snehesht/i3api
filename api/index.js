'use strict'

var express = require('express');
var app = express();


app.get('/', function (req,res){
	res.send('Welcome, This is an API service for i3 Window manager. ')

});

app.get('/api/v0/ip', function(req,res){
console.log(req.headers.host)
});


app.listen(8000, function(){
	console.log('Listening on port 8000')
});