const express = require('express');
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
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use(compression());
  app.use(morgan('tiny'));
  app.use(express.static('build'));
  app.use('/api/v1', api());
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });

  return { app, store, models, dbInstance };
};

module.exports = startServer;
