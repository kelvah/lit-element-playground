import {LitElement, html, css} from 'lit-element';

export class MyStuff extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        font-family: monospace;
        font-size: 16px;
        background-color: deeppink;
      }
      h1,
      h2,
      h3 {
        color: black;
        background-color: yellow;
        font-style: italic;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
    };
  }

  constructor() {
    super();
    this.items = [
      'Mezzanine',
      'Blues Funeral',
      'Like Clockwork...',
      'Chelsea Girl',
    ];
  }

  render() {
    return html`
      <h1>Stuff List of ${this.name}</h1>
      <stuff-list
        items="${JSON.stringify(this.items)}"
        .delete="${this.deleteItem}"
        .add="${this.addItem}"
      >
      </stuff-list>
    `;
  }

  deleteItem(index) {
    const updatedItems = [...this.items];
    updatedItems.splice(index, 1);
    this.items = updatedItems;
  }

  addItem(newItem) {
    const updatedItems = [...this.items];
    updatedItems.push(newItem);
    this.items = updatedItems;
  }
}

window.customElements.define('my-stuff', MyStuff);
