const express = require('express');
const router = express.Router();
const controller = require('../controller/complaintController');

router.post('/', controller.createComplaint);
router.get('/', controller.getAllComplaints);
router.put('/:id', controller.updateComplaint);
router.delete('/:id', controller.deleteComplaint);

module.exports = router;
