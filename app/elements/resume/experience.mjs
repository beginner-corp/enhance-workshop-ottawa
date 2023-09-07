export default function Experience ({ html, state }) {
  const { store } = state
  const { experience = [] } = store
  const jobs = experience.map(job => {
    const { company, role, start, end, description } = job
    return `
      <article class='grid-lg gap4-lg col-2 mbe4 leading3'>
        <h2 class='mbe0'>
          <span class='uppercase tracking1 font-semibold'>${company}</span><br />
          <span class='uppercase tracking1 text-1'>${start}–${end ? end : 'present'}</span>
        </h2>

        <data-list class=''>
          <dt>Role</dt>
          <dd>${role}</dd>

          <dt>Description</dt>
          <dd>${description}</dd>
        </data-list>
      </article>
    `
  }).join('')

  return html`
    <section class='mi-auto'>
      ${jobs}
    </section>
  `
}