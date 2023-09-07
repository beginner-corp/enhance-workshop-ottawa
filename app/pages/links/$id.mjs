export default function UpdateLink({ html, state }) {
  const { store } = state
  const link = store.link || {}

  return html`<enhance-page-container>
  <enhance-form
  action="/links/${link.key}"
  method="POST">
    <enhance-fieldset legend="Link Page">
    <enhance-text-input label="Link Text" type="text" id="text" name="text" value="${link?.text || ''}" ></enhance-text-input>
    <enhance-text-input label="Link Url" type="text" id="url" name="url" value="${link?.url || ''}" ></enhance-text-input>
    <enhance-checkbox label="Published" type="checkbox" id="published" name="published" ${link?.published ? "checked" : ""}></enhance-checkbox>
    <input type="hidden" id="key" name="key" value="${link?.key}" />
    <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
    </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}