const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userName: {type: String,required: true},
  issue: {type: String,required: true},
  timestamp: {type: Date,default: Date.now},
  priority: {type: String,enum: ['Low', 'Medium', 'High'],default: 'Low'}
});

module.exports = mongoose.model('Complaint', complaintSchema);