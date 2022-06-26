const express = require('express');
const { tagError } = require('error-handler-module');
const tripsController = require('../controller/trips');

const router = express.Router();

const initRouter = ({ store }) => {
  const trips = tripsController({ store });
  router.post('/trips', async (req, res, next) => {
    try {
      const trip = await trips.registerTrip(req.body);
      return res.status(201).json({ id: trip.id });
    } catch (error) {
      return next(tagError(error));
    }
  });

  router.post('/trips/:id/end', async (req, res, next) => {
    try {
      await trips.endTrip(req.params.id, req.body);
      return res.sendStatus(204);
    } catch (error) {
      return next(tagError(error));
    }
  });

  return router;
};

module.exports = initRouter;
