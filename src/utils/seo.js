export const buildPageMeta = ({ title, description, slug, lang, image }) => ({
  title: `${title} — Luxe Dental Clinic`,
  description,
  canonical: `https://luxedental.eg/${lang !== 'en' ? lang + '/' : ''}${slug}`,
  og: {
    title,
    description,
    image: image || 'https://luxedental.eg/og-image.jpg',
    url: `https://luxedental.eg/${slug}`,
    type: 'website',
  },
});
