const db = require("../models");
const Tour_package = db.tour_packages;

// Get all tour_packages
const getAllTourPackages = async (req, res) => {
  try {
    const tour_packages = await Tour_package.findAll({
      include: [
        {
          model: db.partners,
          attributes: ["fullname_partner"]
        },
        {
          model: db.attractions,
          attributes: ["name_attraction"],
        }
      ]
    });
    res.json(tour_packages);
  } catch (e) {
    console.log(e);
    }
};

// Get package by ID
const getTourPackageById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const tour_package = await Tour_package.findByPk(id, {
      include: [
        {
          model: db.partners,
          attributes: ["fullname_partner"]
        },
        {
          model: db.attractions,
          attributes: ["name_attraction"],
        }
      ]
    });
    if (tour_package) {
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: tour_package.toJSON() });
    } else {
      console.log('Tour package not found');
      res.status(404).json({ error: 'Tour package not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new package
const createTourPackage = async (req, res) => {
  const {name, price, desc, photo, start_hour, end_hour, id_partner, id_attraction} = req.body;
  try {
    const newTourPackage = await Tour_package.create({
      name_tour_package: name,
      price_tour_package: price,
      desc_tour_package: desc,
      photo_tour_package: photo,
      start_hour: start_hour,
      end_hour: end_hour,
      id_partner: id_partner,
      id_attraction: id_attraction
    });
    res.status(201).json(newTourPackage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an package by ID
const updateTourPackage = async (req, res) => {
  const id = parseInt(req.params.id);
  const {name, price, desc, photo, start_hour, end_hour} = req.body;
  try {
    const tour_package = await Tour_package.findByPk(id);
    if (tour_package) {
      const updatedTourPackage = await tour_package.update({
        name_tour_package: name,
        price_tour_package: price,
        desc_tour_package: desc,
        photo_tour_package: photo,
        start_hour: start_hour,
        end_hour: end_hour
      });
      return res.status(200).json({ status: 'Success', message: 'Tour package updated successfully', data: updatedTourPackage.toJSON() });
    } else {
      return res.status(404).json({ message: 'package not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const deleteTourPackage = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const tour_package = await Tour_package.findByPk(id);
      if (tour_package) {
          await tour_package.destroy();
          return res.status(200).json({ status: 'Success', message: 'Tour package deleted successfully!', data: tour_package.toJSON() });
      } else {
          return res.status(404).json({ status: 'Failed', message: 'Tour package not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllTourPackages,
  getTourPackageById,
  createTourPackage,
  updateTourPackage,
  deleteTourPackage,
};