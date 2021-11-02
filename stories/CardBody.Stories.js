import { html } from 'lit-html';
import '../src/CardBody.js';

export default {
  title: 'Card Body',
  component: 'card-body',
  argTypes: {
    type: { control: 'text'
    options: {
    science: 'science',
    objective: 'objective',
    question: 'question'
    },
   },
  },
};

export const LearningScaffold = LearningScaffoldTemplate.bind({});
LearningScaffold.args = {
  type: 'science',
};
