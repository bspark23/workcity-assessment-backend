const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route imports
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Route middleware
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projects', projectRoutes);

// Temporary root route to test server
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
      console.log('✅ MongoDB connected');
      // Import and use routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
