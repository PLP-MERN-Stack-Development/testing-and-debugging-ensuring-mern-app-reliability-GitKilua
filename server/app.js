// app.js
const express = require('express');
const cors = require('cors');

const bugRoutes = require('./routes/bugRoutes'); // Make sure this path exists

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugRoutes);

module.exports = app;
