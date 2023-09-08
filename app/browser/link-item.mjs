/* eslint-disable no-undef */
import CustomElement from '@enhance/custom-element'
import MorphdomMixin from '@enhance/morphdom-mixin'
import LinkItemElement from '../elements/link-item.mjs'

export default class LinkItem extends MorphdomMixin(CustomElement) {
  static observedAttributes = ['key', 'text', 'url', 'published'];

  render(args) {
    return LinkItemElement(args)
  }
}

if (!customElements.get('link-item')) {
  customElements.define('link-item', LinkItem);
}
