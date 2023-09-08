export default function DeleteButtonElement({ html, state }) {
  const { attrs } = state
  const { key } = attrs
  return html`
    <style>
        :host button {
          color: var(--light);
          background-color: var(--primary-500)
        }
        :host button:focus, :host button:hover {
          outline: none;
          background-color: var(--primary-400)
        }
    </style>
    <form action="/links/${key}/delete" method="POST" class="mb-1">
        <button class="whitespace-no-wrap pb-3 pi0 font-semibold cursor-pointer radius0">
          <span>Delete this link</span>
        </button>
    </form>
    <script type="module" src="/_public/browser/delete-button.mjs"></script>
    `
}