// Highlighted works shown on the home page. Each links to /work/:slug,
// rendered by src/pages/WorkDetail.jsx. Drop your own images in /public and
// point `thumb` / `images` at them (e.g. '/works/choices.jpg').

export const works = [
  {
    slug: 'choices',
    title: 'Choices',
    category: 'Painting',
    year: 2022,
    thumb: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1000&q=80',
    blurb: 'Oil & acrylic on canvas — defiance held in stillness.',
    medium: 'Oil & Acrylic on Canvas',
    dimensions: '18 × 24 in',
    statement:
      'A figure at a threshold. The painting sits in the moment before a decision that cannot be unmade — the quiet weight of taking a stance.',
    body: [
      'Worked in layered oil and acrylic, the surface is built up and scraped back, leaving the history of every choice visible in the texture.',
      'It belongs to a body of work about resistance and memory — about the people who keep a culture alive when an authority would rather it disappear.',
    ],
    images: [
      'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1600&q=80',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=1600&q=80',
    ],
  },
  {
    slug: 'mother-tongue',
    title: 'Mother Tongue',
    category: 'AI · Language',
    year: 2024,
    thumb: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000&q=80',
    blurb: 'Speech & OCR models that keep an endangered language readable.',
    medium: 'Python · PyTorch · AWS',
    dimensions: '1,500+ hours transcribed',
    statement:
      'To erase a people, first erase their words. This work builds the tools that make a language refuse to be erased.',
    body: [
      'A pipeline for Tibetan speech recognition and text digitization — turning fragile, scattered recordings and manuscripts into a searchable, living archive.',
      'Built for scale and for survival: thousands of hours of audio and tens of thousands of pages, processed so that the next generation can still read their own history.',
    ],
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80',
    ],
    link: 'https://github.com/spsither',
  },
  {
    slug: 'archive',
    title: 'The Archive',
    category: 'Software · Data',
    year: 2023,
    thumb: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&q=80',
    blurb: 'A museum-scale image archive — 29K+ images served.',
    medium: 'React · Python · AWS',
    dimensions: '29,000+ images',
    statement:
      'Memory, made impossible to delete — distributed, mirrored, and open.',
    body: [
      'An image platform for the Tibet Museum: ingest, catalog, and serve a vast collection at high performance, so the record stays accessible no matter what.',
    ],
    images: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80',
    ],
  },
]

export const findWork = slug => works.find(w => w.slug === slug)
