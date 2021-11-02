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

  // check for header
  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('cool');
  });

  // checks that card header exists and renders
  it('renders card-header', () => {
    const header = element.shadowRoot.querySelector('card-header');
    expect(header).to.exist;
  });

  // TODO: checks slot for body content
  it('renders content', () => {
    const body = element.shadowRoot.querySelector('slot[name="body-content"]');
    expect(body).to.exist;
    /* expect(paragraph.assignedElements({ flat: true })[0].innerText).to.equal(
      'I am content'
    ); */
  });

  // verify properties have correct type and icon assigned
  it('checks updatedProperties', () => {
    element.type = 'science';
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    element.type = 'objective';
    setTimeout(() => {
      expect(element.type).to.equal('objective');
      expect(element.icon).to.equal('lightbulb');
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
      expect(element.icon).to.equal('question');
    }, 100);
  });

  // accessibility and color contrast
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
