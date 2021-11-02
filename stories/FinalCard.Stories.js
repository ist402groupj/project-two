import { html } from 'lit-html';
import '../src/FinalCard.js';

export default {
  title: 'Final Card',
  component: 'final-card',
  argTypes: {
    type: { 
      control: 'text',
  options: {
    math : 'lightbulb', 
    science: 'science',
    question: 'question',
  },
},
  },
};


function FinalCardTemplate({type, slot,heading }) {
  return html`
    <final-card type="${type}"> header = "${heading}">
    ${slot}
    </final-card>
  `;
}

export const FinalCard = FinalCardTemplate.bind({});
FinalCard.args = {
  options: {
    science: 'science',
    objective: 'objective',
    question: 'question',
  }

export const scienceCard = CardIconTemplate.bind({});
scienceCard.args = {
   type : 'science',
   heading:'Chem Connection',
   slot: html` <p>Describe the subatomic particles that make up an atom</p>`,
}

export const objectiveCard = CardIconTemplate.bind({});
objectiveCard.args = {
    type: 'objective',
    heading:'Learning Objective',
    slot: html` <p>oUse the periodic table to determine the numbers of protons and electrons in a neutral(uncharged) atom</p>`,
}

export const questionCard = CardIconTemplate.bind({});
questionCard.args = {
    type: 'question',
    heading: 'Did you know?',
    slot:  html` <p>There is about 0.4 pound or 200 grams of salt(NaCl) in the average adult human body</p>`,
}

};