export default function LinktreeContainer({ html, state }) {
  const { store={} } = state
  const { page={}, links=[] } = store
  const { description='No description yet', title='No title yet' } = page
  const linkItems = links.map(link => {
    const { text='', url='' } = link
    return html`
    <li class="mbe0">
      <linktree-link text="${text}" url="${url}"></linktree-link>
    </li>
  `
  }).join('\n')
  const defaultLink = html`
    <li>
      <linktree-link text="Add some links" url="/login"></linktree-link>
    </li>
    `

  return html`
    <style>
      :host {
        display: block;
        height: 100vh;
        min-inline-size: 20rem;
        padding: 4rem 2rem;
        background-image: var(--linktree-bg-img);
        background-size: cover;
      }
      :host > div > img {
        width: 10rem;
        object-fit: cover;
        border-radius: 100%;
      }
      :host > ul {
        max-inline-size: 50rem;
        margin: auto;
      }
      :host > ul > li {
        border-radius: var(--linktree-link-border-radius);
        box-shadow: var(--linktree-link-shadow);
      }
      :host > ul > li:active {
        box-shadow: none;
        transform: var(--linktree-link-transform);
      }
      .avatar-img {
        content:var(--linktree-avatar-img);
      }

    </style>
    <div class="flex mbe-2 justify-content-center">
      <img class="avatar-img" alt="Axol lotl">
    </div>
    <h1 class="text1 font-bold mbe-4">
      ${title}
    </h1>
    <p class="text0 font-light mbe3">
      ${description}
    </p>
    <ul class="list-none">
      ${linkItems.length ? linkItems : defaultLink}
    </ul>
  `
}