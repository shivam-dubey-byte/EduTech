const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI_PRO)//, { useNewUrlParser: true, useUnifiedTopology: true }
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;
//srd191104
//ECWKUWWYT2QHPWR1
//sQWpdHYV38rvG8uG
