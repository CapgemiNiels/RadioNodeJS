var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){

    response.writeHead(200,{ 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello World! from template';
    html = html.replace('{Message}', message);
    response.end(html);

}).listen(80, '127.0.0.1')