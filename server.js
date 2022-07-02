require('dotenv').config();
const logger = require('./server/utils/logger');
const serverApp = require('./server/app');

const PORT = process.env.PORT || 4000;

serverApp()
  .then(({ app }) => 
    app.listen(PORT, () =>
      logger.info(`Listening PORT: ${PORT}`)
    ))
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
