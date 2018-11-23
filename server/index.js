const express = require('express');
const path = require('path');
const config = require('./config/config');
const api = require('./routes/api');
const auth = require('./auth/routes');
const routes = require('./routes');
const app = express();

require('./middleware/appMiddleware')(app);
require('mongoose').connect(config.db.url);

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.use('/auth', auth);
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
 