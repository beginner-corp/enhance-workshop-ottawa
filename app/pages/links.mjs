
export default function links({ html, state }) {
  const { store } = state
  let links = store.links || []
  // 1. Get Problems and values from the store
  const link = store.link || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Links page</h1>
    ${links.map(item => `<article id="${item.key}" class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">text: </strong>${item?.text || ''}</p>
  <p class="pb-2"><strong class="capitalize">url: </strong>${item?.url || ''}</p>
  <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
</div>
<p class="mb-1">
  <enhance-link href="/links/${item.key}">Edit this link</enhance-link>
</p>
<form action="/links/${item.key}/delete" method="POST" class="mb-1">
  <enhance-submit-button><span slot="label">Delete this link</span></enhance-submit-button>
</form>
</article>`).join('\n')}
${'' /* 2. Set details to open if problems ocurred */}
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New link</summary>
    <enhance-form
  action="/links/${link.key}"
  method="POST">
${'' /* 3. Overall form error messages */}
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Link">
${'' /* 4,5,6. Problems, initial values, and validation attributes added */}
  <enhance-text-input label="Text" type="text" id="text" name="text" value="${link?.text}" errors="${problems?.text?.errors}" required minlength=1 ></enhance-text-input>
  <enhance-text-input label="Url" type="url" id="url" name="url" value="${link?.url}" errors="${problems?.url?.errors}" required></enhance-text-input>
  <enhance-checkbox label="Published" type="checkbox" id="published" name="published" ${link?.published ? "checked" : ""} errors="${problems?.published?.errors}"></enhance-checkbox>
  <input type="hidden" id="key" name="key" value="${link?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</details>
</main>
</enhance-page-container>
  `
}