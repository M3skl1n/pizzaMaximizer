const http = require('http');
const port = process.env.PORT || 3000
var fs = require('fs');

const server = http.createServer((req, res) => {
        fs.readFile('demofile1.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
	});

server.listen(port,() => {
	console.log(`Server running at port `+port);
    });

/*
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html');
 res.end('<h1>Hello World</h1>');
 */
