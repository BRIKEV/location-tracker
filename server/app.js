const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');
const storeInstance = require('./store');
const mongodb = require('./mongodb');
const config = require('./config');
const api = require('./routes/api');

const app = express();

const startServer = async () => {
  const { dbInstance, models } = await mongodb(config.mongo);
  const store = await storeInstance({
    dbInstance,
    models,
  });
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use(compression());
  app.use(morgan('tiny'));
  app.use(express.static('build'));
  app.use('/api/v1', api({
    store,
  }));
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });

  return { app, store, models, dbInstance };
};

module.exports = startServer;
