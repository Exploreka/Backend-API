const db = require("../models");
const WishlistAttraction = db.wishlist_attractions;

// GET wishlist attraction by Id User
const getWishlistAttractionByUserId = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const wishlist_attractions = await WishlistAttraction.findAll({
        where: { id_user: id },
        include: [
          {
            model: db.users,
            attributes: ["fullname_user"]
          },
          {
            model: db.attractions,
            attributes: ["name_attraction"],
          },
        ],
      });
      if (wishlist_attractions.length > 0) {
        return res.status(200).json({
          status: 'Success',
          message: 'Data retrieved successfully!',
          data: wishlist_attractions
        });
      } else {
        console.log('Wishlist not found');
        res.status(404).json({ error: 'Wishlist not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };  

// Add wishlist attraction
const createWishlistAttraction = async (req, res) => {
    try {
      const { userId, attractionId } = req.body;
      if (!userId || !attractionId) {
        return res.status(400).json({ error: 'Id user and Id attraction are required' });
      }
      const newWishlistAttraction = await WishlistAttraction.create({
        id_user: userId,
        id_attraction: attractionId,
      });
      res.status(201).json({ status: 'Success', message: 'New wishlist has been created!', data: newWishlistAttraction });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Delete an attraction by ID
const deleteWishlistAttraction = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const wishlist_attraction = await WishlistAttraction.findByPk(id);
        if (wishlist_attraction) {
            await attraction.destroy();
            return res.status(200).json({ status: 'Success', message: 'Wishlist deleted successfully!', data: wishlist_attraction.toJSON() });
        } else {
            return res.status(404).json({ message: 'Wishlist Attraction not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getWishlistAttractionByUserId,
    createWishlistAttraction,
    deleteWishlistAttraction,
};
