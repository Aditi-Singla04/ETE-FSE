const Complaint = require('../models/complaintSchema');

// Create
const createComplaint = async (req, res) => {
  try {
    const inputData = req.body;

    const existingComplaint = await Complaint.findOne({ userName: inputData.userName, issue: inputData.issue });
    if (existingComplaint) {
      return res.status(409).json({ message: 'Complaint already logged by this user.' });
    }

    const newComplaint = await Complaint.create(inputData);
    return res.status(200).json({ message: 'Issue Registered', data: newComplaint });
  } catch (err) {
    console.error("Error", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Read
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    return res.status(200).json({ data: complaints });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update
const updateComplaint = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updated = await Complaint.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Complaint not found' });

    return res.status(200).json({ message: 'Complaint updated', data: updated });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete
const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Complaint.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Complaint not found' });

    return res.status(200).json({ message: 'Complaint deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  updateComplaint,
  deleteComplaint,
};
