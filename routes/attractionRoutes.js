const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionController');

// Get all attractions
router.get('/attractions', attractionController.getAllAttractions);

// Get attraction by ID
router.get('/attractions/:id', attractionController.getAttractionById);

// Get attraction by ID Category
router.get('/attractions/cat/:id', attractionController.getAttractionsByCategoryId);

// Create a new attraction
router.post('/attractions', attractionController.createAttraction);

// Update an attraction by ID
router.patch('/attractions/:id', attractionController.updateAttraction);

// Delete an attraction by ID
router.delete('/attractions/:id', attractionController.deleteAttraction);

module.exports = router;
