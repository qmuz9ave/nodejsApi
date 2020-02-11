var http=require('http');
var url=require('url');
var fs=require('fs');
var request = require('request');

http.createServer(function (req, res) {
request('https://api.darksky.net/forecast/966cfa831967587d4d30dde52d01c122/27.7089427,85.2560925', function (error, response, body) {
  var jsondata=JSON.stringify(body);
  res.write(jsondata);
  return res.end();

});


	
}).listen(8080);