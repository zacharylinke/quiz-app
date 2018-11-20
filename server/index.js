const express = require('express');
const path = require('path');

const app = express();

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

const api = require('./routes/api')
const routes = require('./routes');

app.use('/api/v1', api);
app.use('/', routes);

/** Handle Error */
app.use(function(err, req, res, next) {
    if(err) {
        console.log(err);
        res.status(500).send(err);
    }
  });

module.exports = app; 
 