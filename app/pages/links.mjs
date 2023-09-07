export default function Links({ html, state }) {
  const { store } = state
  let links = store.links || []

  return html`
<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Link Pages</h1>
    ${links.map(link => `<article class="mb2">
      <div class="mb0">
        <p class="pb-2"><strong class="capitalize">Link Text: </strong>${link?.text || ''}</p>
        <p class="pb-2"><strong class="capitalize">Link Url: </strong>${link?.url || ''}</p>
        <p class="pb-2"><strong class="capitalize">Link Published: </strong>${link?.published || ''}</p>
        <p class="pb-2"><strong class="capitalize">Key: </strong>${link?.key || ''}</p>
      </div>
      <p class="mb-1">
        <enhance-link href="/links/${link.key}">Edit this link page</enhance-link>
      </p>
      <form action="/links/${link.key}/delete" method="POST" class="mb-1">
        <enhance-submit-button><span slot="label">Delete this link page</span></enhance-submit-button>
      </form>
      </article>`).join('\n')}
    <details class="mb0" >
      <summary>New link page</summary>
      <enhance-form
        action="/links"
        method="POST">
        <enhance-fieldset legend="Link Page">
          <enhance-text-input label="Link Text" type="text" id="text" name="text"  ></enhance-text-input>
          <enhance-text-input label="Link Url" type="text" id="url" name="url"  ></enhance-text-input>
          <enhance-checkbox label="Published" type="checkbox" id="published" name="published"></enhance-checkbox>
          <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
        </enhance-fieldset>
      </enhance-form>
    </details>
  </main>
</enhance-page-container>
  `
}