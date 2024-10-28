import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.secondaryCreator = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String },
        secondaryCreator: { type: String }
    };
  }

  static get styles() {
    return [css`
    

    .image {
      display: inline-block;
      max-width: 240px;
      width: 240px;
      font-size: 16px;
      text-align: center;
    }

    .image div {
    max-width: 240px;
    margin-top: 8px;
    }

    .image:focus,
      .image:hover {
        background-color: #fe0000;
      }

    .image img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    }

    .info {
        padding: 8px;
      }

    .secondarycreator {
      font-size: 14px;
      color: grey;
      margin-top: 4px;
     }

    `];
  }

  render() {
    return html`
    <a href="${this.source}" target="_blank" class="image" tabindex="0">
        <img src="${this.source}" alt="${this.alt}" />
        <div>${this.title}</div>
        ${this.secondaryCreator ? html`<div class="secondarycreator">Creator: ${this.secondaryCreator}</div>` : ''}
  </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);