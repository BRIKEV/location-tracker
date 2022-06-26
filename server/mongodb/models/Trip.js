const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const createdOn = () => {
  return new Date();
};

const tripSchema = new mongoose.Schema({
  id: {
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  },
  start: {
    lat: Number,
    long: Number,
    created: { type: Date, default: createdOn },
  },
  finish: {
    lat: Number,
    long: Number,
    created: { type: Date, default: createdOn },
    price: { type: Number, index: true },
  },
  completed: { type: Boolean, required: true },
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
