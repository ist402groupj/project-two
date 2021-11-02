import { html } from 'lit-html';
import '../src/CardIcon.js';

export default {
  title: 'Card Icon',
  component: 'card-icon',
  argTypes: {
    type: { 
      control: 'text',
  options: {
    science: 'science',
    objective: 'objective',
    question: 'question',
  },
},
  },
};



function CardIconTemplate({ type}) {
  return html`
    <card-icon type=${type}"></card-icon>
    </div>`
    ;
}

export const scienceIcon = CardIconTemplate.bind({});
scienceIcon.args = {
   type : 'science',
};

export const objectiveIcon = CardIconTemplate.bind({});
objectiveIcon.args = {
    type: 'objective',
};

export const questionIcon = CardIconTemplate.bind({});
questionIcon.args = {
    type: 'question',
};
