const User = require('../models/complaintSchema');

// Create complaint
const createComplaint = async (req, res) => {
  try {
    const inputData = req.body;

    const existingComplaint = await User.findOne({ userName: inputData.userName, issue: inputData.issue });
    if (existingComplaint) {
      return res.status(409).json({ message: 'Complaint already logged by this user.' });
    }

    const newComplaint = await User.create(inputData);
    console.log("User", newComplaint);
    return res.status(200).json({ message: 'Issue Registered', data: newComplaint });
  } catch (err) {
    console.error("Error", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Read all complaints
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await User.find();
    return res.status(200).json({ data: complaints });
  } catch (err) {
    console.error("Error", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update complaint by ID
const updateComplaint = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedComplaint = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    return res.status(200).json({ message: 'Complaint updated', data: updatedComplaint });
  } catch (err) {
    console.error("Error", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete complaint by ID
const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComplaint = await User.findByIdAndDelete(id);
    if (!deletedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    return res.status(200).json({ message: 'Complaint deleted' });
  } catch (err) {
    console.error("Error", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  updateComplaint,
  deleteComplaint,
};
