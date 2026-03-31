require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

(async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('MONGODB_URI not set');
      process.exit(1);
    }

    await mongoose.connect(uri);
    const schema = new mongoose.Schema({}, { strict: false, collection: 'services' });
    const Service = mongoose.model('ServiceVerification', schema);
    const doc = await Service.findOne({ slug: 'stainless-steel-fabrication' }).lean();
    if (!doc) {
      console.error('Document not found');
      process.exit(1);
    }
    console.log('Verified service slug:', doc.slug);
    console.log('Long description:');
    console.log(doc.longDescription.join('\n'));
  } catch (err) {
    console.error('Verification failed:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
})();
