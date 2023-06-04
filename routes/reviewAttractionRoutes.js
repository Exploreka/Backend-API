const express = require('express');
const router = express.Router();
const reviewAttractionController = require('../controllers/reviewAttractionController');

// Get all review
router.get('/review_attraction', reviewAttractionController.getAllReviewAttractions);

// Get review by ID review
router.get('/review_attraction/:id', reviewAttractionController.getReviewAttractionById);

// Get review by ID attraction
router.get('/review_attraction/:id', reviewAttractionController.getReviewAttractionByAttractionId);

// Create a new review
router.post('/review_attraction', reviewAttractionController.createReviewAttraction);

// Update a review by ID
router.patch('/review_attraction/:id', reviewAttractionController.updateReviewAttraction);

// Delete a review by ID
router.delete('/review_attraction/:id', reviewAttractionController.deleteReviewAttraction);

module.exports = router;
