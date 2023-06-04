const db = require("../models");
const WishlistTourPackage = db.wishlist_tour_packages;

// GET wishlist tour package by Id User
const getWishlistTourPackageByUserId = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const wishlist_tour_packages = await WishlistTourPackage.findAll({
          where: { id_user: id },
          include: [
            {
              model: db.users,
              attributes: ["fullname_user"]
            },
            {
              model: db.tour_packages,
              attributes: ["name_tour_package"],
            },
          ],
        });
        if (wishlist_tour_packages.length > 0) {
          return res.status(200).json({
            status: 'Success',
            message: 'Data retrieved successfully!',
            data: wishlist_tour_packages
          });
        } else {
          console.log('Wishlist not found');
          res.status(404).json({ error: 'Wishlist not found' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

// Add wishlist tour package
const createWishlistTourPackage = async (req, res) => {
    try {
      const { userId, tourpackageId } = req.body;
      if (!userId || !tourpackageId) {
        return res.status(400).json({ error: 'Id user and Id tour package are required' });
      }
      const newWishlistTourPackage = await WishlistTourPackage.create({
        id_user: userId,
        id_tour_package: tourpackageId,
      });
      res.status(201).json({ status: 'Success', message: 'New wishlist has been created!', data: newWishlistTourPackage });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Delete an tour package by ID
const deleteWishlistTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const wishlist_tour_packages = await WishlistTourPackage.findByPk(id);
        if (wishlist_tour_packages) {
            await wishlist_tour_packages.destroy();
            return res.status(200).json({ status: 'Success', message: 'Wishlist deleted successfully!', data: wishlist_tour_packages.toJSON() });
        } else {
            return res.status(404).json({ message: 'Wishlist Tour Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getWishlistTourPackageByUserId,
    createWishlistTourPackage,
    deleteWishlistTourPackage,
};
