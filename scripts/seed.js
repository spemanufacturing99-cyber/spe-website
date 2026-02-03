// Run with: MONGODB_URI="mongodb://..." node scripts/seed.js
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const services = [
  {
    title: 'Custom Pressure Vessel Fabrication',
    slug: 'custom-pressure-vessels',
    category: 'Pressure Vessels',
    excerpt: 'End-to-end design, fabrication, testing, and erection of pressure vessels.',
    longDescription: [
      'We combine engineering expertise and modern fabrication to deliver bespoke pressure vessels tailored to client needs.',
      'Design, material selection, fabrication, NDT, surface treatment, and commissioning support.'
    ],
    features: ['Full turnkey manufacturing', 'Material traceability and certified welding', 'Advanced NDT'],
    specs: [{label:'Max Diameter', value:'4.5 m'}, {label:'Max Length', value:'18 m'}],
    images: ['/the-art-and-science.png','/precision-metal-chain.png','/certified-welding.png']
  },
  {
    title: 'Structural Fabrication',
    slug: 'structural-fabrication',
    category: 'Fabrication & Erection',
    excerpt: 'Heavy and light structural fabrication with certified weld procedures.',
    images: ['/certified-welding.png']
  },
  {
    title: 'Heat Exchangers',
    slug: 'heat-exchangers',
    category: 'Process Equipment',
    excerpt: 'Custom shell & tube, plate and specialized exchangers.',
    images: ['/the-art-and-science.png']
  },
  {
    title: 'EPCC Projects',
    slug: 'epcc-projects',
    category: 'Turnkey Contracting',
    excerpt: 'End-to-end project delivery with single-point responsibility.',
    images: ['/precision-metal-chain.png']
  },
  {
    title: 'Planned Maintenance',
    slug: 'planned-maintenance',
    category: 'Maintenance & Support',
    excerpt: 'Scheduled shutdown and preventive maintenance programs.',
    images: ['/certified-welding.png']
  }
];

async function run() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    console.error('Set MONGODB_URI environment variable before running seed script.');
    process.exit(1);
  }

  // Mongoose (modern drivers) no longer needs legacy options
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection;

  try {
    console.log('Connected to DB. Clearing existing services...');
    await db.collection('services').deleteMany({});
    console.log('Inserting services...');
    await db.collection('services').insertMany(services.map(s => ({ ...s, createdAt: new Date() })));
    console.log('Seed complete.');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();