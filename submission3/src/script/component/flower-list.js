import './flower-item.js';

class FlowerList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set flowers(flowers) {
    this._flowers = flowers;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._flowers.forEach(flower => {
      const flowerItemElement = document.createElement('flower-item');
      flowerItemElement.flower = flower;
      this.shadowDOM.appendChild(flowerItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('flower-list', FlowerList);
