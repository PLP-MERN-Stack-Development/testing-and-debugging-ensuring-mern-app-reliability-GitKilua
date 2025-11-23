  const mongoose = require('mongoose');
  // Simple setup for test DB
  mongoose.connect(process.env.TEST_MONGO_URI || 'mongodb://localhost:27017/testdb');
  