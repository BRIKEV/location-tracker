const {
  CustomErrorTypes,
  errorFactory,
} = require('error-handler-module');
const logger = require('../utils/logger');

const notFoundError = errorFactory(CustomErrorTypes.NOT_FOUND);

const start = ({ store }) => {
  const registerTrip = async (trip) => {
    logger.info('Registering trip...');
    const newTrip = await store.registerTrip(trip);
    logger.info('Trip registered...');
    return { id: newTrip.id };
  };

  const endTrip = async (id, trip) => {
    logger.info('Endind trip...');
    const updatedTrip = await store.endTrip(id, trip);
    if (!updatedTrip) {
      throw notFoundError('Trip Not found');
    }
    logger.info('Trip ended...');
  };

  return { registerTrip, endTrip };
};

module.exports = start;
