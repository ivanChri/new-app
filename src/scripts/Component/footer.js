class footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-fluid p-3 text-center text-light footer">
        <h2 class="fs-2 fw-bold">newsPortal 2022</h2>
      </div>
    `;
  }
}
customElements.define('footer-bar', footer);
