const express = require('express');
const router = express.Router();
const reviewAttractionController = require('../controllers/reviewAttractionController');

// Get all attractions
router.get('/reviewattraction', reviewAttractionController.getAllReviewAttractions);

// Get attraction by ID
router.get('/reviewattraction/:id', reviewAttractionController.getReviewAttractionById);

// Create a new attraction
router.post('/reviewattraction', reviewAttractionController.createReviewAttraction);

// Update an attraction by ID
router.put('/reviewattraction/:id', reviewAttractionController.updateReviewAttraction);

// Delete an attraction by ID
router.delete('/reviewattraction/:id', reviewAttractionController.deleteReviewAttraction);

module.exports = router;
