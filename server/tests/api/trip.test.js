const supertest = require('supertest');
const startServer  = require('../../app');

describe('Trip endpoints', () => {
  let mongoModels;
  let request;
  let dbClient;
  beforeAll(async () => {
    const { app, models, dbInstance } = await startServer();
    request = supertest(app);
    mongoModels = models;
    dbClient = dbInstance;
  });

  beforeEach(async () => {
    await mongoModels.Trip.deleteMany({});
  });

  afterAll(async () => {
    await dbClient.disconnect();
  });

  it('"/api/v1/trips" should create a new trip', () => (
    request.post('/api/v1/trips')
      .send({
        lat: 12,
        long: 40,
      })
      .expect(201)
      .then(async ({ body }) => {
        expect(body).toHaveProperty('id');
        const trips = await mongoModels.Trip.find();
        expect(trips).toHaveLength(1);
        const [newTrip] = trips;
        expect(newTrip).toHaveProperty('id', 'start', 'finish', 'completed', 'createdAt', 'updatedAt');
        expect(newTrip).toHaveProperty(['start', 'lat'], 12);
        expect(newTrip).toHaveProperty(['start', 'long'], 40);
        expect(newTrip).toHaveProperty('completed', false);
      })
  ));

  it('"/api/v1/trips/:id/end" should end a trip', () => (
    request.post('/api/v1/trips')
      .send({
        lat: 12,
        long: 40,
      })
      .expect(201)
      .then(async ({ body }) => {
        const { id } = body;
        return request.post(`/api/v1/trips/${id}/end`)
          .send({
            lat: 80,
            long: 62,
            price: 200
          })
          .expect(204);
      })
      .then(async ({ body }) => {
        const trips = await mongoModels.Trip.find();
        expect(trips).toHaveLength(1);
        const [newTrip] = trips;
        expect(newTrip).toHaveProperty('id', 'start', 'finish', 'completed', 'createdAt', 'updatedAt');
        expect(newTrip).toHaveProperty(['start', 'lat'], 12);
        expect(newTrip).toHaveProperty(['start', 'long'], 40);
        expect(newTrip).toHaveProperty('completed', true);
        expect(newTrip).toHaveProperty(['finish', 'lat'], 80);
        expect(newTrip).toHaveProperty(['finish', 'long'], 62);
        expect(newTrip).toHaveProperty(['finish', 'price'], 200);
      })
  ));

  it('"/api/v1/trips/:id/end" should return not found when id does not exists', () => (
    request.post('/api/v1/trips/not-found-id/end')
      .send({
        lat: 80,
        long: 62,
        price: 200
      })
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ message: 'Trip Not found' });
      })
  ));
});
