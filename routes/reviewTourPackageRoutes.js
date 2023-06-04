const express = require('express');
const router = express.Router();
const reviewTourPackageController = require('../controllers/reviewTourPackageController');

// Get all review
router.get('/review_tour_package', reviewTourPackageController.getAllReviewTourPackage);

// Get review by ID
router.get('/review_tour_package/:id', reviewTourPackageController.getReviewTourPackageById);

// Get review by ID tour package
router.get('/review_tour_package/:id', reviewTourPackageController.getReviewTourPackageByTourPackageId);

// Create a new review
router.post('/review_tour_package', reviewTourPackageController.createReviewTourPackage);

// Update a review by ID
router.patch('/review_tour_package/:id', reviewTourPackageController.updateReviewTourPackage);

// Delete a review by ID
router.delete('/review_tour_package/:id', reviewTourPackageController.deleteReviewTourPackage);

module.exports = router;
