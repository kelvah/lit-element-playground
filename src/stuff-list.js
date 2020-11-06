import {LitElement, html, css} from 'lit-element';
import {live} from 'lit-html/directives/live';

export class StuffList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        --line-padding: 0.5em 0.75em;
      }
      ul li {
        list-style: upper-roman;
        color: yellow;
        background-color: black;
        margin: 0.75em 0;
        padding: var(--line-padding);
        position: relative;
      }
      ul li:before {
        font-weight: bold;
      }

      .delete {
        visibility: hidden;
        opacity: 0;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        background-color: violet;
        color: black;
        font-weight: bold;
        font-style: italic;
        border: 4px solid black;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.11s ease-out;
      }
      .delete:hover {
        background-color: palevioletred;
      }
      ul li:hover .delete {
        visibility: visible;
        opacity: 1;
      }
      .add-item {
        text-align: center;
      }
      .add-item__field,
      .add-item__button {
        font-size: 1em;
        font-family: monospace;
        border: none;
        padding: var(--line-padding);
      }
      .add-item__field {
        background-color: lemonchiffon;
        width: 300px;
      }
      .add-item__button {
        color: white;
        background-color: brown;
        cursor: pointer;
        font-weight: 900;
        transition: all 0.11s ease-out;
      }
      .add-item__button:hover {
        color: black;
        background-color: bisque;
      }
    `;
  }

  static get properties() {
    return {
      items: {type: Array, reflect: true},
      delete: {},
      add: {},
    };
  }

  constructor() {
    super();
    this.newItem = '';
  }

  render() {
    return html`
      <ul>
        ${this.items.map(
          (item, index) =>
            html`
              <li>
                <span>${item}</span>
                <button
                  class="delete"
                  @click=${() => this.delete(index)}
                  part="button"
                >
                  GET RID OF IT!
                </button>
              </li>
            `
        )}
      </ul>
      <section class="add-item">
        <input
          class="add-item__field"
          type="text"
          .value=${live(this.newItem)}
          placeholder="Missing something?"
          @change=${(event) => (this.newItem = event.target.value)}
        /><button class="add-item__button" @click=${this.addItem} part="button">
          THROW IT THERE!
        </button>
      </section>
    `;
  }

  addItem() {
    this.add(this.newItem);
    this.newItem = '';
  }
}

window.customElements.define('stuff-list', StuffList);
