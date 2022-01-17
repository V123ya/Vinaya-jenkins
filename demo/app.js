
var http = require('http');
var express = require('express')
http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});


    res.end('Hello World!!');
    console.log("Server started running on port 5000")

}).listen(5000);