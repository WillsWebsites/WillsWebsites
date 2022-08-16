import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered
   * @returns {undefined | string} A markup string is returned if render is false
   * @this {Object } View object instance
   * @author William Schaefemreyer
   * @todo Finish Implementation
   */
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSpinner() {
    const spinnerMarkup = `
      <div class="spinner">
      <svg>
          <use href="${icons}#icon-loader"></use>
      </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', spinnerMarkup);
  }
  renderError(message = this._errorMessage) {
    const errorMarkup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', errorMarkup);
  }
  renderMessage(message = this._displayMessage) {
    const messageMarkup = `
            <div class="message">
                <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', messageMarkup);
  }
  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    newElements.forEach((el, i) => {
      const curEl = curElements[i];

      // Change text
      if (!el.isEqualNode(curEl) && el.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = el.textContent;
      }

      // Change Attributes
      if (!el.isEqualNode(curEl)) {
        Array.from(el.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value)
        })
      }
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
}
