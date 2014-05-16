var connect = require('connect'),
    http = require('http');

var app = connect();
app.use(connect.static('public'));

http.createServer(app).listen(8888);