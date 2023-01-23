class articles extends HTMLElement {
  set value(value) {
    this._value = value;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="col w-100 my-1">
        <div class="card mw-100 m-1">
          <img src="${this._value.urlToImage}" class="card-img-top img-fluid img-thumbnail" alt="${this._value.title}">
          <div class="card-body">
            <h5 class="card-title">${this._value.title}</h5>
            <p class="card-text">${this._value.description}</p>
            <a href="${this._value.url}" class="btn btn-primary">lihat selengkapnya</a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('article-list', articles);
// card-img-top
