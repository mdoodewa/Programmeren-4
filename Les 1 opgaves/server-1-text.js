var http = require('http');

http.createServer(function(request, response){
    console.log('Er was een request');
    response.writeHead(200, {'Content-type':'text/plain'});
    response.write('Hello World!');
    response.end();
}).listen(3000);

console.log('De server luistert mee op port 3000');