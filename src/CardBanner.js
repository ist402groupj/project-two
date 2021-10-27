import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

// const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
// const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
// const question = new URL('../assets/question.svg', import.meta.url).href;

export class CardBanner extends SimpleColors {
  static get tag() {
    return 'card-banner';
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _rotateIcon() {
    // console.log(this);
    if (!this.shadowRoot.querySelector('details').open) {
      this.shadowRoot.querySelector('summary').style.listStyleImage =
        "url('../assets/arrow-down.svg')";
    } else {
      this.shadowRoot.querySelector('summary').style.listStyleImage =
        "url('../assets/arrow-right.svg')";
    }
  }

  constructor() {
    super();
    this.accentColor = 'purple';
    this.dark = false;
  }

  static get properties() {
    return {
      ...super.properties,
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      // attribute helps us bind the JS spec for variables names to the HTML spec
      // <learning-card my-icon="whatever" will set this.myIcon to "whatever"
      myIcon: { type: String, attribute: 'my-icon' },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          --banner-color-1: red;
          --banner-color-2: purple;
          --banner-color-3: orange;
        }
        .banner-wrapper {
          background-color: var(--simple-colors-default-theme-accent-7);
        }
        img {
          display: inline-flex;
          height: var(--card-height, 150px);
          width: var(--card-width, 150px);
          background-color: transparent;
        }
        #banner1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          color: white;
        }
        #banner2 {
          display: flex;
          flex-direction: row;
          background-color: var(--banner-color-2);
          color: white;
        }
        #banner3 {
          display: flex;
          flex-direction: row;
          background-color: var(--banner-color-3);
          color: white;
        }
        #headers {
          padding: 5px;
          margin: 5px;
          display: inline-flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }
        #main-header {
          font-size: 200%;
          text-transform: uppercase;
          font-weight: 300;
        }
        #sub-header {
          font-size: 250%;
          text-transform: uppercase;
          font-weight: 500;
        }
        #bannerElement {
          display: flex;
          flex-direction: row;
        }
      `,
    ];
  }

  render() {
    // return html`<div>This is my ${this.title} and this is ${this.header}<slot></slot></div>`;
    return html`
      <div class="banner-wrapper" style="display: flex;">
        <card-icon icon="${this.myIcon}" type="${this.myIcon}"></card-icon>
        <div id="banner1">
          <div id="headers">
            <slot id="main-header" name="main-header"></slot>
            <slot id="sub-header" name="sub-header"></slot>
          </div>
        </div>
        <!-- <div id="banner2">
          <div id="headers">
            <div slot="main-header" id="main-header">Unit 1</div>
            <div slot="sub-header" id="sub-header">Chem Connection</div>
          </div>
        </div>
        <div id="banner3">
          <div id="headers">
            <div slot="main-header" id="main-header">Unit 1</div>
            <div slot="sub-header" id="sub-header">Did you know?</div>
          </div>
        </div> -->
      </div>
      <script type="module">
        import './src/app.js';
      </script>
    `;
  }
}
