const avatar = (name, src, size, position, crop = {}) => ({
  name,
  src,
  size,
  objectPosition: crop.objectPosition,
  scale: crop.scale,
  ...position,
});

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ’s', href: '#faq' },
];

export const heroSection = {
  subtitle:
    'We are a team of strategists, designers communicators, researchers. Together, we belive that progress only hghappens when you refuse to play things safe.',
  image: {
    src: '/hero-people-strip.png',
    alt: 'Team portraits strip',
  },
};

export const featureSections = [
  {
    body:
      'We are a team of strategists, designers communicators, researchers. Together, we belive that progress only happens when you refuse to play things safe.',
    image: {
      src: '/story-split-boardroom.png',
      alt: 'Boardroom meeting',
      size: 'xl',
    },
  },
  {
    body:
      'We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.',
    image: {
      src: '/story-split-workshop.png',
      alt: 'Workshop working session',
      size: 'lg',
    },
  },
];

export const offeringRows = [
  {
    label: 'Office of multiple\ninterest content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
  },
];

export const testimonialSection = {
  image: {
    src: '/testimonial-composite.png',
    alt: 'Customer testimonial collage',
  },
};

export const footerColumns = [
  {
    title: 'Company',
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Studio', href: '#studio' },
      { label: 'Service', href: '#services' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Terms & Policies',
    items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Explore', href: '#' },
      { label: 'Accesibility', href: '#' },
    ],
  },
  {
    title: 'Follow Us',
    items: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },
  {
    id: 'faq',
    title: 'Terms & Policies',
    items: [
      { label: '1498w Fluton ste, STE 2D Chicgo, IL 63867.' },
      { label: '(123) 456789000', href: 'tel:123456789000' },
      { label: 'info@elementum.com', href: 'mailto:info@elementum.com' },
    ],
  },
];
