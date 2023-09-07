export default function ResumeContainer({ html }) {
  return html`
    <style>
      :host {
        display: block;
        max-inline-size: 84ch;
      }
    </style>
    <slot></slot>
  `
}