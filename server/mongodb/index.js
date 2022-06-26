const mongoose = require('mongoose');
const Location = require('./models/Location');

const start = async options => {
  try {
    await mongoose.connect(options.uri);
    return {
      mongoose,
      models: {
        Location,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = start;
