// access the http module of the internet
const http = require('http');

// access the url of the domain
const url = require('url');

// acces sthe file system of the computer
const fs = require('fs');

// access the created modules file
const modules = require('./modules');

// sample web address
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';

// Methods around the URL built-in module.
const q = url.parse(adr, true);

/* Retrieve host from url */
// console.log(q.host);

/* Retrieve pathname from url */
// console.log(q.pathname);

/* Retrieve search query string from url */
// console.log(q.search);

/* Retrieve query object from url */
// console.log(q.query);

http
  .createServer((req, res) => {
    /* The response to the request will be HTML */
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    /* display response from the server as a html string */
    // res.write('Hello World');

    /* display the newly created module as html */
    // res.write('The date and the time are currently' + modules.myDateTime());

    /* Display as html the part of the domain after the slash(/) the request is coming from */
    // res.write(req.url);

    /* Split the query string, in this example we'll use the URL module and split it. 
    Use the following url to display the results: http://localhost:8080/?year=2017&month=July  */
    // const q = url.parse(req.url, true).query;
    // const text = q.year + ' ' + q.month;
    // res.end(text);

    /* Access files from system directly in node js application */
    // fs.readFile('demofile1.html', (err, data) => {
    //   res.writeHead(200, { 'Content-Type': 'text/html' });
    //   res.write(data);
    //   return res.end();
    // });

    /* Create a new file using the appendFile() method. 
    This method can also be used to update the file */
    // fs.appendFile('mynewfile1.text', 'Hello Content!', (err) => {
    //   if (err) throw err;

    //   console.log('saved!');
    // });

    /* Create new file with flag as a modifier(basically what can be done with the file)
     for the file. For instance, the flag "w" is for writing */
    // fs.open('mynewfile2.txt', 'w', (err, file) => {
    //   if (err) throw err;

    //   console.log('saved!');
    // });

    /* Replace the specified file and content if it exists.
     If the file does not exist, a new file, containing the specified content, will be created.
     This method can also be used to update the file */
    // fs.writeFile('mynewfile3.txt', 'Hello Content!', (err) => {
    //   if (err) throw err;

    //   console.log('Saved');
    // });

    /* Delete a file with the File System module */
    // fs.unlink('mynewfile2.txt', function (err) {
    //   if (err) throw err;

    //   console.log('File deleted!');
    // });

    /* Rename a file with the file system module */
    // fs.rename('mynewfile1.text', 'myrenamedfile.text', function (err) {
    //   if (err) throw err;

    //   console.log('File renamed!');
    // });

    /* Default end of response */
    res.end();
  })
  .listen(8080);
