require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio').default;
const { connectDB } = require('../lib/mongodb');

async function seed() {
  await connectDB();
  console.log('Connected to DB');
  const initial = [
    {
      title: 'Angel Stadium of Anaheim',
      slug: 'angel-stadium-of-anaheim',
      subTitle: 'Stainless-steel architectural fabrication for high-impact public spaces.',
      industry: 'Sports & Facilities',
      summary: 'Delivered precision-fit handrails and maintenance access structures for stadium retrofit.',
      challenge: 'Tight tolerances on curved handrails and complex mounting interfaces.',
      solution: '3D scanning, prefabrication, and phased field install with engineered anchors.',
      result: 'Completed in 8 weeks with zero rework and improved ADA access.',
      metrics: [{ label: 'Project Value', value: '$580K' }, { label: 'Lead Time', value: '8 weeks' }],
      bullets: ['Precision plasma cutting.', 'Welded assemblies.', 'Field QA checklists.'],
      heroImage: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80',
      tags: ['Stainless Steel', 'Architecture', 'Stadium'],
    },
    {
      title: 'Hyperloop Test Sled',
      slug: 'hyperloop-test-sled',
      subTitle: 'High-speed prototype test sled for next-gen transportation research.',
      industry: 'Transportation Engineering',
      summary: 'Built modular high-strength sled and structural frame for linear tracks.',
      challenge: 'Must handle extreme dynamic loads while keeping mass low.',
      solution: 'AR-grade alloys, FEA, and precision-welded subassemblies.',
      result: 'Successful first full-speed test run with minimal deformation.',
      metrics: [{ label: 'Top Speed', value: '430 km/h' }, { label: 'Tolerance', value: '±0.2 mm' }],
      bullets: ['Custom structural joining.', 'Instrumentation integration.', 'Rapid iterative production.'],
      heroImage: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
      tags: ['Aerospace', 'Prototype', 'High Speed'],
    },
    {
      title: 'Bio Boxes & Clarifiers',
      slug: 'bio-boxes-clarifiers',
      subTitle: 'Custom wastewater clarifier systems for sustainability plants.',
      industry: 'Water Treatment',
      summary: 'Delivered clarifier boxes and process housing with corrosion-resistant alloys.',
      challenge: 'Chemical resistance and structural integrity for continuous operation.',
      solution: 'Grade-specific stainless fabrication with passivation and QA jigs.',
      result: 'Achieved >95% solids separation efficiency and reduced downtime by 28%.',
      metrics: [{ label: 'Capacity', value: '260 m3/day' }, { label: 'Efficiency', value: '>95%' }],
      bullets: ['Optimized flow design.', 'Leak-tight tank fabrication.', 'Commissioning support.'],
      heroImage: 'https://images.unsplash.com/photo-1471139672879-acc0f948ad90?auto=format&fit=crop&w=1200&q=80',
      tags: ['Water', 'Clarifiers', 'Engineering'],
    },
  ];

  await Portfolio.deleteMany({});
  await Portfolio.insertMany(initial);
  console.log('Seeded portfolio entries:', initial.length);
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
