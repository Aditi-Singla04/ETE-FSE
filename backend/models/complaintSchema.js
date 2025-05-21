const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  issue: { type: String, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
