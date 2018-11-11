// simple express server for HTML pages!
// ES6 style

const express = require('express');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;
const app = express();

let cache = [];// Array is OK!
cache[0] = fs.readFileSync( __dirname + '/app/dist/index.html');
// cache[1] = fs.readFileSync( __dirname + '/views/testview.html');



app.use(express.static('app/dist'));

app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

// app.get('/test', (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.send( cache[1] );
// });

app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});
