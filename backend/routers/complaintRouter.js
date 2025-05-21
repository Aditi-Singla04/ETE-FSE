const express = require('express');
const router = express.Router();
const complaintController = require('../controller/complaintController');

router.post('/complaints', complaintController.createComplaint);
router.get('/complaints', complaintController.getAllComplaints);
router.put('/complaints/:id', complaintController.updateComplaint);
router.delete('/complaints/:id', complaintController.deleteComplaint);

module.exports = router;
