import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('FinalCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<final-card accent-color="green" toggle type="science" heading="Heading" sub-heading="Science">
    <ul>
      <li>li one</li>
      <li>li two</li>
      <li>li three</li>
      <li>li four</li>
    </ul>
    <cta-btn title=""></cta-btn>
    </final-card>`);
  });

  it('renders card header', () => {
    const header = element.shadowRoot.querySelector('card-header');
    expect(header).to.exist;
  });

  it('renders content body', () => {
    const body = element.shadowRoot.querySelector('card-body');
    expect(body).to.exist;
  });

  // fails
  it('checks updatedProperties', () => {
    setTimeout(() => {
      element.type = 'science';
      expect(element.type).to.equal('science');
      expect(element.icon).to.equal('beaker');
    }, 100);
    setTimeout(() => {
      element.type = 'objective';
      expect(element.type).to.equal('objective');
      expect(element.icon).to.equal('lightbulb');
    }, 100);
    setTimeout(() => {
      element.type = 'question';
      expect(element.type).to.equal('question');
      expect(element.icon).to.equal('question');
    }, 100);
  });

  // fails
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
