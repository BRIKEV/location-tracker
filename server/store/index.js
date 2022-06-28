const start = async ({ models }) => {
  const registerTrip = async (trip) => {
    const newTrip = new models.Trip({
      completed: false,
      start: {
        lat: trip.lat,
        long: trip.long,
      },
    });
    const tripSaved = await newTrip.save();
    return { id: tripSaved.id };
  };

  const endTrip = async (id, trip) => {
    const updatedTrip = await models.Trip.findOneAndUpdate({ id }, {
      $set: {
        finish: {
          lat: trip.lat,
          long: trip.long,
          price: trip.price,
          created: new Date(),
        },
        completed: true,
      },
    });
    return updatedTrip;
  };

  return { registerTrip, endTrip };
};

module.exports = start;
