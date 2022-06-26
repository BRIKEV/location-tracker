const supertest = require('supertest');
const startServer  = require('../../app');

describe('Trip endpoints', () => {
  let mongoModels;
  let request;
  let dbClient;
  beforeAll(async () => {
    const { app, models, dbInstance } = await startServer ();
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
        const data = await mongoModels.Trip.find();
        expect(data).toHaveLength(1);
      })
  ));
});
