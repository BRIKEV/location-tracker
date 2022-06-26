const logger = require('./server/utils/logger');
const serverApp = require('./server/app');

const PORT = process.env.PORT || 3000;
serverApp()
  .then(({ app }) => 
    app.listen(PORT, () =>
      logger.info(`Listening PORT: ${PORT}`)
    ))
  .catch(err => console.error(err));
