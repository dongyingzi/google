var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect()
    .use(serveStatic('./'));

http.createServer(app)
    .listen(8888, function () {
        console.log('listen at: 8888');
    });