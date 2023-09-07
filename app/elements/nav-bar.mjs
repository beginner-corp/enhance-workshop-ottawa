export default function NavBar({ html }) {
  return html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      .backdrop {
        backdrop-filter: blur(2px);
        background: hsla(0deg 0% 100% / 0.9);
        --mask-image: linear-gradient(to bottom, black 50%, transparent);
        mask-image: var(--mask-image);
        -webkit-mask-image: var(--mask-image);
        inset-block-end: -20%;
      }
    </style>
    <site-container>
      <nav class='flex align-items-center gap0 leading1'>
        <a href='/' class='no-underline flex align-items-center gap0'>
          <h1 class='font-semibold tracking-1'>
            Axol Lotl<br />
            <span class='font-normal'>Web Developer</span>
          </h1>
        </a>
        <ul class='mis-auto flex gap0 list-none text-1 uppercase tracking1 font-semibold'>
          <li><a href='/'>Home</a></li>
          <li><a href='/resume'>Résumé</a></li>
        </ul>
      </nav>
      <div class='backdrop absolute inset-0 z-1'></div>
    </site-container>
  `
}