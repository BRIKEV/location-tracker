const logger = require('../utils/logger')

const start = ({ store }) => {
  const registerTrip = async (trip) => {
    logger.info('Registering trip...');
    const newTrip = await store.registerTrip(trip);
    logger.info('Trip registered...');
    return { id: newTrip.id };
  };

  const endTrip = async (id, trip) => {
    logger.info('Endind trip...');
    await store.endTrip(id, trip);
    logger.info('Trip ended...');
  };

  return { registerTrip, endTrip };
};

module.exports = start;
