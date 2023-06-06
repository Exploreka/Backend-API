const db = require("../models");
const Tour_package_cat = db.tour_package_categories
const Tour_package = db.tour_packages
const Relation_tour_package_cat = db.relation_tour_package_cats

// Get all attractions
const getAllTourPackageCat = async (req, res) => {
  try {
    const tour_package_cat = await Tour_package_cat.findAll();
    return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: tour_package_cat});
  } catch (e) {
    console.log(e);
    }
};

// Get tour package category by ID
const getTourPackageCatByIdTourPackage = async (req, res) => {
  const id = req.params.id;

  try {
    const relations = await Relation_tour_package_cat.findAll({
      where: { id_tour_package: id },
      include: [db.tour_package_categories],
    });

    res.json(relations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
    getTourPackageCatByIdTourPackage,
    getAllTourPackageCat
}