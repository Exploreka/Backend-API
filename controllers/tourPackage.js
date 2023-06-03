const db = require("../models");
const Tour_package = db.tour_packages;

// Get all tour_packages
const getAllTourPackages = async (req, res) => {
  try {
    const tour_packages = await Tour_package.findAll({
      include: [db.partners, db.attractions],
    });
    res.json(tour_packages);
  } catch (e) {
    console.log(e);
    }
};

// Get package by ID
const getTourPackageById = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
      await package.findByPk(id).then(package => {
          if (package) {
              return res.status(400).json(package.toJSON());
          } else {
              console.log('package not found')
          }
      }).catch(error => {
          console.error('Error:', error);
      });
  } catch (e) {
      res.status(400).json(e)
  }
}

// Create a new package
const createTourPackage = async (req, res) => {
  const {name, price, desc, photo, rating, coordinate, start_hour, end_hour} = req.body;
  try {
    const newTourPackage = await Tour_package.create({
      name_tour_package: name,
      price_tour_package: price,
      desc_package: desc,
      photo_tour_package: photo,
      rating_avg_tour_package: rating,
      coordinate_package: coordinate,
      start_hour: start_hour,
      end_hour: end_hour,
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
  const {name, price, desc, photo, address, coordinate, open_day, close_day, open_hour, close_hour} = req.body;
  try {
    const package = await package.findByPk(id);
    if (package) {
      const updatedpackage = await package.update({
        name_package: name,
        price_package: price,
        desc_package: desc,
        photo_package: photo,
        address_package: address,
        coordinate_package: coordinate,
        open_day: open_day,
        close_day: close_day,
        open_hour: open_hour,
        close_hour: close_hour
      });
      return res.status(200).json({ message: 'package updated successfully', package: updatedpackage });
    } else {
      return res.status(404).json({ message: 'package not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete an package by ID
const deleteTourPackage = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const package = await package.findByPk(id);
      if (package) {
          await package.destroy();
          return res.status(200).json({ message: 'package deleted successfully' });
      } else {
          return res.status(404).json({ message: 'package not found' });
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