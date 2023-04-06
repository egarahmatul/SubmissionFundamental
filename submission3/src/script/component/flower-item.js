class FlowerItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set flower(flower) {
    this._flower = flower;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-flower {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .flower-info {
          padding: 24px;
        }
        .flower-info > h2 {
          font-weight: lighter;
        }
        .flower-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="fan-art-flower" src="${this._flower.default_image}" >
      <div class="flower-info">
        <h2>${this._flower.common_name}</h2>
        <p>Other Name : ${this._flower.other_name}</p>
        <p>Sunlight   : ${this._flower.sunlight}</p>
      </div>
    `;
  }
}

customElements.define('flower-item', FlowerItem);
