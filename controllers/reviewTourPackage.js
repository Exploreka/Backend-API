const db = require("../models");
const reviewtourpackage = require("../models/review_attraction");
const ReviewTourPackage = db.review_tour_packages;

// Get all Review attractions
const getAllReviewTourPackage = async (req, res) => {
    try {
        const attractions = await ReviewTourPackage.findAll({
            include: [db.tour_packages, db.users],
        });
        res.json(attractions);
    } catch (e) {
        console.log(e);
    }
};

// Get Review attractions by ID
const getReviewTourPackageById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        await ReviewTourPackage.findByPk(id).then(reviewattraction => {
            if (reviewattraction) {
                return res.status(400).json(reviewattraction.toJSON());
            } else {
                console.log('Review Tour Package not found')
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } catch (e) {
        res.status(400).json(e)
    }
}

// Create a new Review attractions
const createReviewTourPackage = async (req, res) => {
    const { rating, comment } = req.body;
    try {
        const newReviewAttraction = await ReviewTourPackage.create(
            {
                rating: rating,
                comment: comment
            }
        );
        res.status(201).json(newReviewAttraction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an attraction by ID
const updateReviewTourPackage = async (req, res) => {
    const { rating, comment } = req.body;
    const id = parseInt(req.params.id);
    try {
        const reviewattraction = await ReviewTourPackage.findByPk(id);
        if (reviewattraction) {
            const updatedReviewAttraction = await reviewattraction.update({
                rating: rating,
                comment: comment
            });
            return res.status(200).json({ message: 'Review tour package updated successfully', attraction: updatedReviewAttraction });
        } else {
            return res.status(404).json({ message: 'Review tour package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete an Review attractions by ID
const deleteReviewTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const reviewattraction = await ReviewTourPackage.findByPk(id);
        if (reviewattraction) {
            await reviewattraction.destroy();
            return res.status(200).json({ message: 'Wishlist tour package deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Wishlist tour package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllReviewTourPackage,
    getReviewTourPackageById,
    createReviewTourPackage,
    updateReviewTourPackage,
    deleteReviewTourPackage,
};
