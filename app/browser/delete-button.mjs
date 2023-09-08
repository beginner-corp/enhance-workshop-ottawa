/* eslint-disable no-undef */
import CustomElement from '@enhance/custom-element'
import MorphdomMixin from '@enhance/morphdom-mixin'
import DeleteButtonElement from '../elements/delete-button.mjs'

export default class DeleteButton extends MorphdomMixin(CustomElement) {
  static get observedAttributes() {
    return ['key']
  }

  render(args) {
    return DeleteButtonElement(args)
  }

  connectedCallback() {
    this.button = this.querySelector('button')
    this.button.addEventListener('click', this.#handleClick);
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.#handleClick);
  }

  #handleClick = async event => {
    event.preventDefault()
    let element = document.getElementById(this.getAttribute('key'))
    let display = element.style.display
    element.style.display = 'none'
    let { action, method } = event.target.closest('form')
    try {
      await fetch(action, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      })
      element.remove()
    } catch(error) {
      console.error("Whoops!", error)
      element.style.display = display
    }
  }
}

if (!customElements.get('delete-button')) {
  customElements.define('delete-button', DeleteButton);
}