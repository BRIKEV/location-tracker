const express = require('express');
const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const { init } = require('express-oas-validator');
const morgan = require('morgan');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');
const { handleHttpError } = require('error-handler-module');
const logger = require('./utils/logger');
const storeInstance = require('./store');
const mongodb = require('./mongodb');
const config = require('./config');
const api = require('./routes/api');

const app = express();

const startServer = () => new Promise(async (resolve) => {
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
  app.use(morgan('tiny', { skip: () => process.env.NODE_ENV === 'test' }));
  app.use(express.static(join(__dirname, '..', 'dist')));
  const instance = expressJSDocSwagger(app)(config.swagger);
  
  instance.on('finish', swaggerDef => {
    const { validateRequest, validateResponse } = init(swaggerDef);
    app.use('/api/v1', api({
      store,
      validators: {
        validateRequest, validateResponse,
      },
    }));
    app.get('/*', (_req, res) => {
      res.sendFile(join(__dirname, '..', 'dist', 'index.html'));
    });
    app.use(handleHttpError(logger));
    resolve({ app, store, models, dbInstance });
  });

});

module.exports = startServer;
