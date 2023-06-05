const sequelize = require('sequelize');
const db = require("../models");
const ReviewAttraction = db.review_attractions;
const {updateAverageRating} = require('./attractionController')

// Get all Review attractions
const getAllReviewAttractions = async (req, res) => {
    try {
      const review_attractions = await ReviewAttraction.findAll({
        include: [
            {
              model: db.users,
              attributes: ["fullname_user"]
            },
            {
              model: db.attractions,
              attributes: ["name_attraction"],
            }
          ]
      });
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: review_attractions});
    } catch (e) {
      console.log(e);
      }
  };

// Get Review attractions by ID
const getReviewAttractionById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const review_attractions = await ReviewAttraction.findByPk(id, {
        include: [
          {
            model: db.users,
            attributes: ["fullname_user"]
          },
          {
            model: db.attractions,
            attributes: ["name_attraction"],
          }
        ]
      });
      if (review_attractions) {
        return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: review_attractions.toJSON() });
      } else {
        console.log('Review not found');
        res.status(404).json({ error: 'Review not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const getReviewAttractionByAttractionId = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const review_attractions = await ReviewAttraction.findAll({
        include: [
          {
            model: db.attractions,
            where: { id_attraction: id },
            attributes: ["name_attraction"]
        },
        {
            model: db.users,
            attributes: ["fullname_user"]
        }
        ],
      });
      if (review_attractions.length > 0) {
        return res.status(200).json({
          status: 'Success',
          message: 'Data retrieved successfully!',
          data: review_attractions.map((review_attraction) => review_attraction.toJSON()),
        });
      } else {
        console.log('Review attraction not found');
        res.status(404).json({ error: 'Review attraction not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const createReviewAttraction = async (req, res) => {
    const { rating, comment, id_user, id_attraction } = req.body;
    try {
      const newReviewAttraction = await ReviewAttraction.create({
        rating: rating,
        comment: comment,
        id_user: id_user,
        id_attraction: id_attraction
      });
      await updateAverageRating(id_attraction);
    res.status(201).json({ status: 'Success', message: 'New review has been posted!', data: newReviewAttraction.toJSON() });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

// Update an attraction by ID
const updateReviewAttraction = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rating, comment } = req.body;
    try {
        const review_attraction = await ReviewAttraction.findByPk(id);
        if (review_attraction) {
            const updatedReviewAttraction = await review_attraction.update({
                rating: rating,
                comment: comment
            });
            return res.status(200).json({ status: 'Success', message: 'Review attraction updated successfully', data: updatedReviewAttraction.toJSON() });
        } else {
            return res.status(404).json({ message: 'Review attraction not found' });
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
        const review_attraction = await ReviewAttraction.findByPk(id);
        if (review_attraction) {
            await review_attraction.destroy();
            return res.status(200).json({ status: 'Success', message: 'Review deleted successfully!', data: review_attraction.toJSON() });
        } else {
            return res.status(404).json({ message: 'Review Attraction not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllReviewAttractions,
    getReviewAttractionById,
    getReviewAttractionByAttractionId,
    createReviewAttraction,
    updateReviewAttraction,
    deleteReviewAttraction,
};
