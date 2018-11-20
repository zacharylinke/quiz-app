const config = require('./server/config/config');
const app = require('./server');
const debug = require('debug');

/** Get port from environment and store in Express. */
const port = config.port;
app.set('port', port);

/** Listen on provided port, on all network interfaces. */
app.listen(port, () => debug(`Server Running on port ${port}`));