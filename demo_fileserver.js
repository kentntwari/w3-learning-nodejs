/* Create a Node.js file that opens the requested file
 and returns the content to the client. If anything goes wrong, throw a 404 error: */

const http = require('http');
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);

    const filename = '.' + q.pathname;

    // console.log(filename);

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8081);
