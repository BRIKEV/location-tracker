const express = require('express');
const trips = require('../controller/trips');

const router = express.Router();

const initRouter = () => {
  router.post('/trip', async (req, res) => {
    const trip = await trips.registerTrip(req.payload);
    return res.status(201).json({ id: trip.id });
  });

  router.post('/trip/:id/end', async (req, res) => {
    await trips.endTrip(req.params.id, req.payload);
    return res.sendStatus(204);
  });

  return router;
};

module.exports = initRouter;
