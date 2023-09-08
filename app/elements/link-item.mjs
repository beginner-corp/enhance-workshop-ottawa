export default function LinkItemElement({ html, state }) {
  const { attrs } = state
  const { key = '', text = '', url = '', published = '' } = attrs
  return html`
      <article class="mb2">
        <div class="mb0">
            <p class="pb-2"><strong class="capitalize">text: </strong><span>${text}</span></p>
            <p class="pb-2"><strong class="capitalize">url: </strong><span>${url}</span></p>
            <p class="pb-2"><strong class="capitalize">published: </strong><span>${published}</span></p>
            <p class="pb-2"><strong class="capitalize">key: </strong><span>${key}</span></p>
        </div>
        <p class="mb-1">
            <a href="/links/${key}">Edit this link</a>
        </p>
        <delete-button key="${key}"></delete-button>
      </article>
      `
}
