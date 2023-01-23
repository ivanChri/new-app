import './articles';

class container extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container p-xl-3 p-lg-3 p-md-2 p-sm-1 m-auto my-1 vw-100">
        <div class="list-article-container p-1 m-auto my-1 mw-100"></div>
      </div>
    `;
    this._data.forEach((el) => {
      const article = document.createElement('article-list');
      article.value = el;
      this.querySelector('.list-article-container').appendChild(article);
    });
  }
}
customElements.define('article-container', container);
