import { css, html, LitElement } from 'lit';
import { CardHeader } from './CardHeader.js';
import { CardBody } from './CardBody.js';

export class FinalCard extends LitElement {
  static get tag() {
    return "final-card";
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
        :host {
            display:block;
            height: inherit;
            width: inherit;
        }
        :host([toggle]) .final-card-bottom {
            transition: max-height 0.75s linear 0s;
            max-height: var(--final-card-bottom, 0);
            height: auto;
            overflow: hidden;
        }
      `;
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      iconScale: { type: String, attribute: "icon-scale" },
      height: { type: String, attribute: "height", reflect: true },
      width: { type: String, attribute: "width", reflect: true },
      accentColor: { type: String, attribute: "accent-color", reflect: true },
      heading: { type: String, attribute: "heading", reflect: true },
      subHeading: { type: String, attribute: "sub-heading", reflect: true },
      toggle: { type: Boolean, reflect: true },
      expanded: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.type = "science";
    this.height = "inherit";
    this.width = "inherit";
    this.heading = "Heading";
    this.subHeading = "sub heading";
    this.accentColor = "grey";
    this.toggle = false;
    this.expanded = false;
  }

  expand() {
    this.removeEventListener('click', this.expand);
    this.addEventListener('click', this.contract);
    this.expanded = true;
    this.style.setProperty('--final-card-bottom', "1000px");
  }

  contract() {
    this.removeEventListener('click', this.contract);
    this.addEventListener('click', this.expand);
    this.expanded = false;
    this.style.setProperty('--final-card-bottom', "0px");
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "type" && this[propName] === "science") {
        this.myIcon = "beaker";
        this.accentColor = "green";
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
        this.accentColor = "red";
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.myIcon = 'question';
        this.accentColor = "blue";
      }

      if (this.toggle === true && this.expanded === false) {
        this.addEventListener('click', this.expand);
      }
      if (this.toggle === true && this.expanded === true) {
        this.addEventListener('click', this.contract);
      }
    });
  }

  // HTML - specific to Lit
  render() {
    return html` 
        <div class="final-card-container">
            <div class="final-card-top">
              <card-header icon="${this.myIcon}" toggle="${this.toggle}" type="${this.type}" heading="${this.heading}" sub-heading="${this.subHeading}" accent-color="${this.accentColor}"></card-header></div>
            <div class="final-card-bottom"><card-body style="border-top:none;"><slot></slot></card-body></div>
        </div>
     `;
  }
}