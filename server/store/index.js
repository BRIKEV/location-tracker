const start = async ({ models }) => {
  const registerTrip = async (trip) => {
    const newTrip = new models.Location({
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
    await models.Location.findOneAndUpdate({ id }, {
      $set: {
        finish: {
          lat: trip.lat,
          long: trip.lat,
          price: trip.price,
        },
      },
    });
  };

  return { registerTrip, endTrip };
};

module.exports = start;
