import { html } from 'lit-html';
import '../src/FinalCard.js';

export default {
  title: 'Final Card',
  component: 'final-card',
  argTypes: {
    type: { control: 'text' },
  },
};


function FinalCardTemplate({ type }) {
  return html`
    <final-card type="${type}">
    ${slot}
    </final-card>
  `;
}

export const FinalCard = FinalCardTemplate.bind({});
FinalCard.args = {
 /* type: 'String',*/ /* not sure what type to put here*/
};
