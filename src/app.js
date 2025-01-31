const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);



connectDB();



//connectToDatabase();
module.exports = app;
//srd191104
//ECWKUWWYT2QHPWR1
//sQWpdHYV38rvG8uG



//mongoose
//  .connect(process.env.MONGO_URI_PRO)
//  .then(() =>{ console.log('Connected to MongoDB');})
//  .catch((err) => console.error('MongoDB connection error:', err));
//async function connectToDatabase() {
//try { //await
  //         mongoose.connect(process.env.MONGO_URI_PRO, {
    //          useNewUrlParser: true,
      //        useUnifiedTopology: true,
        //  })
          //.then(() => console.log('Connected to MongoDB'));
//} catch (error) {
  //        console.error('Error connecting to MongoDB:', error.message);
    //      process.exit(1); // Exit if the connection fails
      //}
//}