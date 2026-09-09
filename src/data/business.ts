// Content for the Wye Valley Plumbing, Heating & Renewables website.
// Email currently uses a placeholder-safe format — update with real
// details before going live.

export const business = {
  name: 'Wye Valley Plumbing, Heating & Renewables',
  shortName: 'Wye Valley',
  logoPrimary: 'WYE VALLEY',
  logoTagline: 'Plumbing, Heating & Renewables',
  tagline: 'Trusted Plumbing, Heating & Renewables Specialists',
  slogan: 'Reliable Plumbing. Smarter Heating. Greener Energy.',
  intro:
    'From boiler repairs to air source and ground source heat pumps, providing high quality plumbing, heating and renewable energy solutions across the Wye Valley and surrounding areas.',
  areaSummary: 'the Wye Valley, Herefordshire, Monmouthshire & Powys',
  areas: ['Hay-on-Wye', 'Hereford', 'Brecon', 'Kington', 'Leominster', 'Ross-on-Wye', 'Monmouth', 'Ledbury'],
  phone: '01497 828041',
  phoneHref: 'tel:+441497828041',
  email: 'info@wyevalleyheating.co.uk',
  gasSafeNumber: '967389',
};

// Direct mobile lines for the two engineers, shown as a secondary option on the Contact section.
export const mobileContacts = [
  { name: 'Scott', phone: '07801 460999', phoneHref: 'tel:+447801460999' },
  { name: 'Nic', phone: '07807 337412', phoneHref: 'tel:+447807337412' },
];

export const logoIcon = '/images/wye-valley-icon.png';
export const logoImage = '/images/wye-valley-logo.jpg';
export const gasSafeLogo = '/images/gas-safe-logo.png';
export const altoLogo = '/images/alto-assured-logo.jpeg';

export const navItems = ['Home', 'Services', 'Projects', 'Reviews', 'About', 'Areas Covered', 'Contact'];

export const heroChecklist = ['Gas Safe Registered', 'Alto Assured Partner Installer', 'Fully Insured', 'Competitive Prices'];

export const trustStrip = [
  {
    title: 'Gas Safe Registered',
    description: 'All gas work is carried out by a fully qualified and Gas Safe registered engineer.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>',
    logo: '/images/gas-safe-logo.png',
  },
  {
    title: 'Alto Assured Partner Installer',
    description: 'MCS registered installer of air source and ground source heat pumps, approved under the Alto Assured Partner scheme.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
    logo: '/images/alto-assured-logo.jpeg',
  },
  {
    title: 'Reliable & Punctual',
    description: 'We turn up when we say we will and get the job done right, first time.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  },
  {
    title: '5 Star Service',
    description: 'Our customers rate us 5 stars for quality, reliability and professionalism.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>',
  },
];

export const services = [
  {
    title: 'Boiler Installations',
    description: 'Supply and install A-rated boilers from leading manufacturers.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><path d="M9 6h6"></path><path d="M9 10h6"></path><path d="M12 14v4"></path></svg>',
  },
  {
    title: 'Boiler Servicing',
    description: 'Keep your boiler running efficiently and safely all year round.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
  },
  {
    title: 'Boiler Repairs',
    description: 'Fast and reliable repairs to get your heating back up and running.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  },
  {
    title: 'Central Heating',
    description: 'Installation, upgrades and repairs to central heating systems.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="1"></rect><path d="M7 6v12"></path><path d="M11 6v12"></path><path d="M15 6v12"></path></svg>',
  },
  {
    title: 'Air Source Heat Pumps',
    description: 'Supply and installation of efficient, low-carbon air source heat pumps.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"></path><path d="M12.59 19.41A2 2 0 1 0 14 16H2"></path><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
  },
  {
    title: 'Ground Source Heat Pumps',
    description: 'Supply and installation of efficient ground source heat pump systems.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"></path><path d="M12 18v4"></path><circle cx="12" cy="12" r="6"></circle></svg>',
  },
  {
    title: 'Bathrooms',
    description: 'Complete bathroom installations designed and fitted to a high standard.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"></path><path d="M6 12V6a2 2 0 0 1 2-2h2v8"></path><path d="M6 20a4 4 0 0 0 8 0"></path></svg>',
  },
  {
    title: 'General Plumbing',
    description: "From leaking taps to full plumbing systems, we've got you covered.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v4a5 5 0 0 1-10 0V7z"></path><path d="M12 16v4"></path><path d="M9 20h6"></path></svg>',
  },
];

export const footerServices = [...services.map((s) => s.title), 'Landlord Certificates'];

export const aboutHighlights = [
  'Boiler installations, servicing & repairs',
  'Air source & ground source heat pump installations',
  'Central heating systems & power flushing',
  'Bathrooms & general plumbing',
  'Landlord certificates & safety checks',
];

export const aboutCallout = {
  title: 'Thinking about renewables?',
  description: 'Get a free consultation on air source and ground source heat pumps.',
  linkLabel: 'View Renewables Services',
};

export const testimonials = [
  {
    quote: 'They installed our new boiler and did a fantastic job. Professional, tidy and great communication throughout. Highly recommend.',
    author: 'Emily R',
    location: 'Hereford',
  },
  {
    quote: 'Switched to an air source heat pump and the whole process was explained clearly from start to finish. Our bills have dropped and the house is warmer than ever.',
    author: 'Mark T',
    location: 'Ross-on-Wye',
  },
  {
    quote: 'They fitted our bathroom from start to finish. The attention to detail is second to none.',
    author: 'Sarah J',
    location: 'Ledbury',
  },
];

export const reviewSummary = '5.0 average rating from 47 customer reviews';

export const galleryItems = [
  { path: '/images/gallery-1.jpg', alt: 'Recent boiler installation' },
  { path: '/images/gallery-2.jpg', alt: 'Air source heat pump installation' },
  { path: '/images/gallery-3.jpg', alt: 'Bathroom plumbing installation' },
];

export const heroImage = { path: '/images/hero.jpg', alt: `${business.name} — bathroom installation` };
export const aboutImage = { path: '/images/about.png', alt: `Before and after boiler installation by ${business.shortName}` };

export const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12.87 1.33zM12 6.87A5.13 5.13 0 1 0 12 17.13 5.13 5.13 0 0 0 12 6.87zm0 8.46a3.33 3.33 0 1 1 0-6.67 3.33 3.33 0 0 1 0 6.67zm5.34-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>',
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.7.44 3.36 1.28 4.82L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.79.83-3.03-.2-.31a8.1 8.1 0 0 1-1.24-4.32c0-4.5 3.67-8.16 8.24-8.16 2.2 0 4.27.86 5.83 2.42a8.14 8.14 0 0 1 2.4 5.79c0 4.5-3.67 8.15-8.24 8.15zm4.51-6.11c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>',
  },
];
