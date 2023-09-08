export default function LinktreeLink({ html, state }) {
  const { attrs={} } = state
  const { text='', url='' } = attrs
  return html`
    <style>
      :host > a {
        display: block;
        text-decoration: none;
        padding: 1rem 2rem;
        background-color: var(--linktree-link-bg-color);
        border-width: 3px;
        border-style: solid;
        border-color: var(--linktree-link-border-color);
        border-radius: var(--linktree-link-border-radius);
      }
      :host > a:hover,
      :host > a:active {
        background-color: var(--linktree-link-bg-color-hover);
        border-color: var(--linktree-link-border-color-hover);
      }
    </style>
    <a href="${url}" alt="${text}" class="truncate">${text}</a>
  `
}