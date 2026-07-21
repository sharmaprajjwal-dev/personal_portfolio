export const SITE = {
  name: 'Prajjwal Sharma',
  domain: 'prajjwalsharma.nz',
  url: 'https://prajjwalsharma.nz',
  title: 'Prajjwal Sharma — AI-Enabled Business Professional',
  titleTemplate: '%s — Prajjwal Sharma',
  description:
    'Business strategy, digital growth, and applied AI. Prajjwal Sharma is an AI-enabled business professional working across strategy, marketing, and operations.',
  locale: 'en_NZ',
  defaultOgImage: '/og-default.jpg',
  socials: {
    linkedin: 'https://linkedin.com/in/prajjwalr12',
    github: 'https://github.com/prajjwalsharma',
    email: 'sharmaprajjwal.nz@gmail.com',
    whatsapp: 'https://wa.me/642109192500',
  },
  location: 'Auckland, New Zealand',
  // TODO: replace with the real shared Google Drive folder link for the gallery.
  galleryDriveUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-REAL-FOLDER-ID',
  // TODO: replace with the real shared Google Drive folder link for the prompt library.
  promptLibraryDriveUrl: 'https://drive.google.com/drive/folders/REPLACE-WITH-REAL-FOLDER-ID',
  // TODO: sign up at https://formspree.io (free tier is enough), create a form, and swap in
  // its endpoint here — e.g. 'https://formspree.io/f/abcdwxyz'. Required for the contact
  // form to actually deliver inquiries, since GitHub Pages can't run server code.
  contactFormEndpoint: 'https://formspree.io/f/REPLACE-WITH-YOUR-FORM-ID',
} as const;
