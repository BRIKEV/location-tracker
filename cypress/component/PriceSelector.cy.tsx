/// <reference types="cypress" />
import { mount } from 'cypress/react';
import PriceSelector from '../../src/components/PriceSelector';

describe('PriceSelector.cy.tsx', () => {
  it('playground', () => {
    const spy = {
      onChange() {}
    };
    cy.spy(spy, 'onChange')
    mount(<PriceSelector onChange={spy.onChange} />);
    cy.get('[data-cy=price-selector] ul:nth-child(1) li:nth-child(1)').click()
      .then(() => {
        expect(spy.onChange).to.be.called;
      });
  });
});
