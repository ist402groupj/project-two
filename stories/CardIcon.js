import { html } from 'lit-html';
import '../src/CardIcon.js';

export default {
  title: 'Card Icon',
  component: 'card-icon',
  argTypes: {
    type: { control: 'text' },
  },
};



function CardIconTemplate({ type}) {
  return html`
    <card-icon type="${type}">
    ${slot}
    </card-icon>
  `;
}

export const lighbulb = CardIconTemplate.bind({});
lighbulb.args = {
    type: 'lightbulb',
}

export const beaker = CardIconTemplate.bind({});
beaker.args = {
    type: 'beaker',
}

export const question = CardIconTemplate.bind({});
question.args = {
    type: 'question',
}
