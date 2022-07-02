/// <reference types="cypress" />
import { mount } from 'cypress/react';
import PriceLabel from '../../src/components/PriceLabel';

describe('PriceLabel.cy.ts', () => {
  it('playground', () => {
    mount(<PriceLabel values={['0', '0', '0', '0']} />);
    cy.get('[data-cy=price-label]').should('contain.text', '00,00');
  });

  it('playground', () => {
    mount(<PriceLabel values={['0', '1', '0', '5']} />);
    cy.get('[data-cy=price-label]').should('contain.text', '01,05');
  });
});
