/* eslint-disable no-undef */
import LinkItem from './link-item.mjs'

export default class SubmitButton extends HTMLElement {
  connectedCallback() {
    this.button = this.querySelector('button')
    this.button.addEventListener('click', this.#handleClick);
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.#handleClick);
  }

  #handleClick = async event => {
    event.preventDefault()
    let form = event.target.closest('form')
    let { action, method } = form
    try {
      let response = await fetch(action, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
      let { link } = await response.json()
      let { key, text, url, published } = link
      let details = document.querySelector('details')
      details.removeAttribute('open')
      form.reset()
      let detailsParent = details.parentNode
      let newNode = new LinkItem()
      newNode.id = key
      newNode.setAttribute('key', key)
      newNode.setAttribute('text', text)
      newNode.setAttribute('url', url)
      newNode.setAttribute('published', published)
      detailsParent.insertBefore(newNode, details)
    } catch(error) {
      console.error("Whoops!", error)
    }
  }
}
if (!customElements.get('submit-button')) {
  customElements.define('submit-button', SubmitButton)
}
