/// <reference types="cypress" />

describe('Location tracker app', () => {
  it('register a route', () => {
    cy.visit('/');
    cy.get('[data-cy=new-trip-button]').click();
  });
});
