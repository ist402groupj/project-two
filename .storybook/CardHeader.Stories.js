import {html} from 'lit-html';

import ' ../src/CardHeader.js';
import '../src/CardIcon.js';

export default {
  title 'Card Header',
  component: 'card-header',
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

export const questionBanner = LearningBannerTemplate.bind({});
questionBanner.args = {
  type: 'question',
  heading: 'Did you Know?',

export const scienceBanner = LearningBannerTemplate.bind({});
sciencebanner.args = {
  type: 'science',
  heading: 'Chem Connection',
};

export const objectiveBanner = LearningBannerTemplate.bind({});
objectiveBanner.args = {
  type: 'objectives',
  heading: 'Learning Objective',
};

function CardHeaderTemlate({type, heading}){
  return html`
          <card-header type=${type} slot ="banner">
           <card-icon type=${type} slot="icon"></card-icon>
           <h2 slot = "heading">${heading}</h2>
           <h3 slot = "subHeading">${type}</h3>
          </card-header>
          `;
          
}




