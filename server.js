var http=require('http');
var url=require('url');
var fs=require('fs');
var request = require('request');
var express = require('express');
var formidable = require('formidable');
var ejs=require('ejs');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	fs.readFile('views/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
});
app.get('/data', function (req, res) {
   request('https://api.darksky.net/forecast/966cfa831967587d4d30dde52d01c122/27.7089427,85.2560925', function (error, response, body) {
	  var jsondata=body;
	  res.render('index',{user: "Great User",title:"homepage"});

});
});

app.get('/process_post', function (req, res) {

});

var server = app.listen(8080, function () {
   
	});