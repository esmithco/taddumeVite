import http from 'http';
import fs from 'fs';

http.createServer(function (req, res) {
  fs.readFile('hola.txt', function(err, data) {
    if (err) {
      console.error(err);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error reading the file');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);

