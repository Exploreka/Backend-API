const express = require('express');
const router = express.Router();
const attractionCatController = require('../controllers/attractionCatController');

// Get all attractions
router.get('/attractionCat', attractionCatController.getAllAttractionCat);

// Get attraction by ID
router.get('/attractionCat/:id', attractionCatController.getAttractionCatById);

// Create a new attraction
router.post('/attractionCat', attractionCatController.createAttractionCat);

// Update an attraction by ID
router.put('/attractionCat/:id', attractionCatController.updateAttractionCat);

// Delete an attraction by ID
router.delete('/attractionCat/:id', attractionCatController.deleteAttractionCat);

module.exports = router;
