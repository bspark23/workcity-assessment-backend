const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: String, default: 'Pending' },
  startDate: Date,
  endDate: Date,
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
});

module.exports = mongoose.model('Project', projectSchema);
