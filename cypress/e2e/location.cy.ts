/// <reference types="cypress" />

function mockLocation(latitude: number, longitude: number) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 });
      });
    }
  };
}

describe('Location tracker app', () => {
  it('register a route', () => {
    const mockId = 'fake-id';
    const fakeLat = 35.172744;
    const fakeLong = 137.05802;
    cy.intercept({
      method: 'post',
      url: '/api/v1/trips'
    }, {
      statusCode: 201,
      body: { id: mockId },
    }).as('newTripRequest');
    cy.intercept({
      method: 'post',
      url: `/api/v1/trips/${mockId}/end`
    }, {
      statusCode: 204,
    }).as('endTripRequest');
    cy.visit('/', mockLocation(fakeLat, fakeLong));
    cy.get('[data-cy=new-trip-button]').click();
    cy.wait('@newTripRequest');
    cy.url().should('include', mockId);
    cy.get('[data-cy=cancel-trip-button]').click();
    cy.get('[data-cy=new-trip-button]').click();
    cy.wait('@newTripRequest');
    cy.url().should('include', 'fake-id');
    cy.get('[data-cy=end-trip-button]').click();
    cy.get('[data-cy=cancel-trip-button]').click();
    cy.get('[data-cy=new-trip-button]').click();
    cy.wait('@newTripRequest');
    cy.url().should('include', 'fake-id');
    cy.get('[data-cy=end-trip-button]').click();
    // 1205
    cy.completePrice(1205);
    cy.get('[data-cy=price-label]').should('contain.text', '12,05');
    cy.get('[data-cy=save-info-button]').click();
    cy.wait('@endTripRequest')
      .then(xhr => {
        const { request } = xhr;
        expect(request.body).to.eql({
          lat: fakeLat,
          long: fakeLong,
          price: 1205
        });
      });
    cy.get('[data-cy=new-trip-button]').should('be.visible');
  });
});
