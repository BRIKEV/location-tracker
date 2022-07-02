const express = require('express');
const { tagError } = require('error-handler-module');
const tripsController = require('../controller/trips');
const limiter = require('../utils/limiter');

const router = express.Router();

const initRouter = ({ store, validators }) => {
  const { validateRequest, validateResponse } = validators;
  const trips = tripsController({ store });
  /**
   * POST /api/v1/trips
   * @summary Endpoint to register trip init cordinates
   * @param {TripStartRequest} request.body.required - Trip start payload
   * @return {TripResponse} 201 - Trip response
   */
  router.post('/trips', validateRequest(), limiter, async (req, res, next) => {
    try {
      const trip = await trips.registerTrip(req.body);
      validateResponse(trip, req, 201);
      return res.status(201).json({ id: trip.id });
    } catch (error) {
      return next(tagError(error));
    }
  });

  /**
   * POST /api/v1/trips/{id}/end
   * @summary Endpoint to register trip end cordinates and price
   * @param {string} id.path - Trip id
   * @param {TripEndRequest} request.body.required - Trip end payload
   * @return 204
   */
  router.post('/trips/:id/end', validateRequest(), limiter, async (req, res, next) => {
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
