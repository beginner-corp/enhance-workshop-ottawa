export default function Html ({ html, state }) {
  const { store } = state
  let links = store.links || []
  const link = store.link || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Links page</h1>
    ${links.map(item => `<link-item id="${item.key}" key="${item.key}" text="${item.text}" url="${item.url}"></link-item>`).join('\n')}
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New link</summary>
    <enhance-form
  action="/links"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Link">
  <enhance-text-input label="Text" type="text" id="text" name="text" value="${link?.text}" errors="${problems?.text?.errors}" required minlength=1 ></enhance-text-input>
  <enhance-text-input label="Url" type="url" id="url" name="url" value="${link?.url}" errors="${problems?.url?.errors}" required></enhance-text-input>
  <enhance-checkbox label="Published" type="checkbox" id="published" name="published" ${link?.published ? "checked" : ""} errors="${problems?.published?.errors}"></enhance-checkbox>
  <input type="hidden" id="key" name="key" value="${link?.key}" />
  <submit-button style="float: right"><span slot="label">Save</span></submit-button>
  </enhance-fieldset>
</enhance-form>
</details>
</main>
</enhance-page-container>
<script type="module" src="/_public/browser/links-page.mjs"></script>
  `
}