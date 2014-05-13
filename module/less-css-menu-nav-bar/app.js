var http = require('http'),
    connect = require('connect');
    
var app = connect();
app.use(connect.static('public'));

http.createServer(app).listen(8888);