export async function get(req){

  const experience = [
    {
      company: 'Begin',
      role: 'Web Developer',
      start: 2015,
      end: null,
      description: 'Currently leading development of Enhance, an HTML first full stack framework leveraging web components and making it easier to work with existing web platform technologies.'
    },
    {
      company: 'Loxa Design Studio',
      role: 'Designer',
      start: 2007,
      end: 2015,
      description: 'I lead the design team at Loxa for nearly 8 years. Together, we crafted end to end design solutions for clients, touching on information architecture, interface design, and user experience.'
    },
    {
      company: 'Axol Web Widgets Co.',
      role: 'Founder',
      start: 2001,
      end: 2007,
      description: 'Axol Web Widgets Co. was a design and development studio. I founded the company and was its lead developer, specializing in creating Macromedia Flash intros, WordPress themes, and WinAmp skins.'
    },
  ]

  return { json: {experience} }
}