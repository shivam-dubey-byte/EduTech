const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI_PRO)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.reason || err.message);
  });
