const db = require("../models");
const wishlisttourpackage = require("../models/wishlist_tour_package");
const wishlistTourPackage = db.wishlist_tour_packages;

// Get all attractions
const getAllWishlistTourPackage = async (req, res) => {
    try {
        const wishlistTourPackage = await wishlistTourPackage.findAll({
            include: [db.tour_packages, db.users],
        });
        res.json(wishlistTourPackage);
    } catch (e) {
        console.log(e);
    }
};

// Get attraction by ID
const getWishlistTourPackageById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        await wishlistTourPackage.findByPk(id).then(wishlisttourpackage => {
            if (wishlisttourpackage) {
                return res.status(400).json(wishlisttourpackage.toJSON());
            } else {
                console.log('Wishlist Tour Package not found')
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } catch (e) {
        res.status(400).json(e)
    }
}

// Create a new attraction
const createWishlistTourPackage = async (req, res) => {
    try {
        const newWishlistTourPackage = await wishlistTourPackage.create();
        res.status(201).json(newWishlistTourPackage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an attraction by ID
const updateWishlistTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const attraction = await wishlistTourPackage.findByPk(id);
        if (attraction) {
            const updatedAttraction = await attraction.update({});
            return res.status(200).json({ message: 'Wishlist Tour Package updated successfully', attraction: updatedAttraction });
        } else {
            return res.status(404).json({ message: 'Wishlist Tour Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete an attraction by ID
const deleteWishlistTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const attraction = await wishlistTourPackage.findByPk(id);
        if (attraction) {
            await attraction.destroy();
            return res.status(200).json({ message: 'Wishlist Tour Package deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Wishlist Tour Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllWishlistTourPackage,
    getWishlistTourPackageById,
    createWishlistTourPackage,
    updateWishlistTourPackage,
    deleteWishlistTourPackage,
};
