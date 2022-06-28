/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      completePrice(value: number): Chainable<void>
    }
  }
}

export {};
