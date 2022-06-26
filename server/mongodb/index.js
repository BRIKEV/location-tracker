const mongoose = require('mongoose');
const Trip = require('./models/Trip');

const start = async options => {
  try {
    await mongoose.connect(options.uri);
    return {
      dbInstance: mongoose,
      models: {
        Trip,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = start;
