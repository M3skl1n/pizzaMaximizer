const http = require('http');
const port = process.env.PORT || 3000

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

    /*const server = http.createServer((req, res) => {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'text/html');
	    res.end('<h1>Hello World</h1>');
                                     
	});

server.listen(port,() => {
	console.log(`Server running at port `+port);
    });*/
