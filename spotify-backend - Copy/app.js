const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));


const authRoutes = require('./routes/authRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);

module.exports = app;
