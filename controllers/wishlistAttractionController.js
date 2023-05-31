const db = require("../models");
const wishlistattraction = require("../models/wishlist_attraction");
const WishlistAttraction = db.wishlist_attractions;

// Get all attractions
const getAllWishlistAttractions = async (req, res) => {
    try {
        const attractions = await WishlistAttraction.findAll({
            include: [db.attractions, db.users],
        });
        res.json(attractions);
    } catch (e) {
        console.log(e);
    }
};

// Get attraction by ID
const getWishlistAttractionById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        await WishlistAttraction.findByPk(id).then(wishlistattraction => {
            if (wishlistattraction) {
                return res.status(400).json(wishlistattraction.toJSON());
            } else {
                console.log('Attraction not found')
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } catch (e) {
        res.status(400).json(e)
    }
}

// Create a new attraction
const createWishlistAttraction = async (req, res) => {
    try {
        const newWishlistAttraction = await WishlistAttraction.create();
        res.status(201).json(newWishlistAttraction);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an attraction by ID
const updateWishlistAttraction = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const attraction = await WishlistAttraction.findByPk(id);
        if (attraction) {
            const updatedAttraction = await attraction.update({});
            return res.status(200).json({ message: 'Wishlist Attraction updated successfully', attraction: updatedAttraction });
        } else {
            return res.status(404).json({ message: 'Wishlist Attraction not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete an attraction by ID
const deleteWishlistAttraction = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const attraction = await WishlistAttraction.findByPk(id);
        if (attraction) {
            await attraction.destroy();
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
    getAllWishlistAttractions,
    getWishlistAttractionById,
    createWishlistAttraction,
    updateWishlistAttraction,
    deleteWishlistAttraction,
};
