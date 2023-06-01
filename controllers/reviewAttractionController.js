const db = require("../models");
const reviewattraction = require("../models/review_attraction");
const ReviewAttraction = db.review_attractions;

// Get all Review attractions
const getAllReviewAttractions = async (req, res) => {
    try {
        const attractions = await ReviewAttraction.findAll({
            include: [db.attractions, db.users],
        });
        res.json(attractions);
    } catch (e) {
        console.log(e);
    }
};

// Get Review attractions by ID
const getReviewAttractionById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        await ReviewAttraction.findByPk(id).then(reviewattraction => {
            if (reviewattraction) {
                return res.status(400).json(reviewattraction.toJSON());
            } else {
                console.log('Review Attraction not found')
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } catch (e) {
        res.status(400).json(e)
    }
}

// Create a new Review attractions
const createReviewAttraction = async (req, res) => {
    const { rating, comment } = req.body;
    try {
        const newReviewAttraction = await ReviewAttraction.create(
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
const updateReviewAttraction = async (req, res) => {
    const { rating, comment } = req.body;
    const id = parseInt(req.params.id);
    try {
        const reviewattraction = await ReviewAttraction.findByPk(id);
        if (reviewattraction) {
            const updatedReviewAttraction = await reviewattraction.update({
                rating: rating,
                comment: comment
            });
            return res.status(200).json({ message: 'Review attractions updated successfully', attraction: updatedReviewAttraction });
        } else {
            return res.status(404).json({ message: 'Review attractions not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete an Review attractions by ID
const deleteReviewAttraction = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const reviewattraction = await ReviewAttraction.findByPk(id);
        if (reviewattraction) {
            await reviewattraction.destroy();
            return res.status(200).json({ message: 'Wishlist Attraction deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Wishlist Attraction not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllReviewAttractions,
    getReviewAttractionById,
    createReviewAttraction,
    updateReviewAttraction,
    deleteReviewAttraction,
};
