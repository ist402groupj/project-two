import { html } from 'lit-html';
import '../src/CardHeader.js';
import '../src/CardIcon.js';


export default {
  title: 'Card Header',
  component: 'card-header',
  argTypes: {
    type: { control: 'text' },
    /* may need to implement things like:
      argTypes : {
        heading : {control: 'text'};
        type:{
          control: 'select',
          etc...
        },
      }, */
  },
};

/*     </card-header>
  /* <learning-banner type=${type} slot="banner">
  <learning-icon type=${type} slot="icon"></learning-icon>
  <h2 slot="heading">${heading}</h2>
  <h3 slot="subHeading">${type}</h3> */ /* Example for html implemented below*/

function CardHeaderTemplate({ ttype, heading /* is this correct??*/ }) {
  return html`
    <card-header type="${type}">
    ${slot}
</learning-banner> **
  `;
}


/* What will out export const class be??
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  slot: html`<p>slotted content that should render</p>`
};
*/