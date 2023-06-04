const sequelize = require('sequelize');
const db = require("../models");
const ReviewTourPackage = db.review_tour_packages;
const {updateAverageRating} = require('./tourPackageController')

// Get all Review tour package
const getAllReviewTourPackage = async (req, res) => {
    try {
      const review_tour_packages = await ReviewTourPackage.findAll({
        include: [
            {
              model: db.users,
              attributes: ["fullname_user"]
            },
            {
              model: db.tour_packages,
              attributes: ["name_tour_package"],
            }
          ]
      });
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: review_tour_packages});
    } catch (e) {
      console.log(e);
      }
  };

// Get Review tour package by ID
const getReviewTourPackageById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const review_tour_packages = await ReviewTourPackage.findByPk(id, {
        include: [
          {
            model: db.users,
            attributes: ["fullname_user"]
          },
          {
            model: db.tour_packages,
            attributes: ["name_tour_package"],
          }
        ]
      });
      if (review_tour_packages) {
        return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: review_tour_packages.toJSON() });
      } else {
        console.log('Review not found');
        res.status(404).json({ error: 'Review not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const getReviewTourPackageByTourPackageId = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const review_tour_packages = await ReviewTourPackage.findAll({
        include: [
          {
            model: db.tour_packages,
            where: { id_tour_package: id },
            attributes: ["name_tour_package"]
        },
        {
            model: db.users,
            attributes: ["fullname_user"]
        }
        ],
      });
      if (review_tour_packages.length > 0) {
        return res.status(200).json({
          status: 'Success',
          message: 'Data retrieved successfully!',
          data: review_tour_packages.map((review_tour_package) => review_tour_package.toJSON()),
        });
      } else {
        console.log('Review tour package not found');
        res.status(404).json({ error: 'Review tour package not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const createReviewTourPackage = async (req, res) => {
    const { rating, comment, id_user, id_tour_package } = req.body;
    try {
      const newReviewTourPackage = await ReviewTourPackage.create({
        rating: rating,
        comment: comment,
        id_user: id_user,
        id_tour_package : id_tour_package
      });
      await updateAverageRating(id_tour_package);
    res.status(201).json({ status: 'Success', message: 'New review has been posted!', data: newReviewTourPackage.toJSON() });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

// Update tour package by ID
const updateReviewTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    const { rating, comment } = req.body;
    try {
        const review_tour_package = await ReviewTourPackage.findByPk(id);
        if (review_tour_package) {
            const updatedReviewTourPackage = await review_tour_package.update({
                rating: rating,
                comment: comment
            });
            return res.status(200).json({ status: 'Success', message: 'Review tour package updated successfully', data: updatedReviewTourPackage.toJSON() });
        } else {
            return res.status(404).json({ message: 'Review tour package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

// Delete an Review tour package by ID
const deleteReviewTourPackage = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const review_tour_package = await ReviewTourPackage.findByPk(id);
        if (review_tour_package) {
            await review_tour_package.destroy();
            return res.status(200).json({ status: 'Success', message: 'Review deleted successfully!', data: review_tour_package.toJSON() });
        } else {
            return res.status(404).json({ message: 'Review tour package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllReviewTourPackage,
    getReviewTourPackageById,
    getReviewTourPackageByTourPackageId,
    createReviewTourPackage,
    updateReviewTourPackage,
    deleteReviewTourPackage,
};
