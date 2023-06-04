const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerController');

// Get all partners
router.get('/partners', partnerController.getAllPartners);

// Get partner by ID
router.get('/partners/:id', partnerController.getPartnerById);

// Create a new partner
router.post('/partners', partnerController.createPartner);

// Update partner by ID
router.patch('/partners/:id', partnerController.updatePartner);

// Delete partner by ID
router.delete('/partners/:id', partnerController.deletePartner);

module.exports = router;
