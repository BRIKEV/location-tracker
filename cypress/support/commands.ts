/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('completePrice', (value: number) => {
  const columns = value.toString().split('').map(value => +value);
  columns.forEach((value, index) => {
    cy.get(`[data-cy=price-selector] ul:nth-child(${index + 1}) li:nth-child(${value + 1})`).click();
    cy.get(`[data-cy=price-selector] ul:nth-child(${index + 1}) li:nth-child(${value + 1})`).click();
    cy.get(`[data-cy=price-selector] ul:nth-child(${index + 1}) li:nth-child(${value + 1})`).click();
    cy.get(`[data-cy=price-selector] ul:nth-child(${index + 1}) li:nth-child(${value + 1})`).click();
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })