const express = require('express');
const tripsController = require('../controller/trips');

const router = express.Router();

const initRouter = ({ store }) => {
  const trips = tripsController({ store });
  router.post('/trips', async (req, res) => {
    const trip = await trips.registerTrip(req.body);
    return res.status(201).json({ id: trip.id });
  });

  router.post('/trips/:id/end', async (req, res) => {
    await trips.endTrip(req.params.id, req.body);
    return res.sendStatus(204);
  });

  return router;
};

module.exports = initRouter;
