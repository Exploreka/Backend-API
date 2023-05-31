const db = require("../models");
const attraction = require("../models/attraction");
const Attraction = db.attractions;

// Get all attractions
const getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.findAll({
      include: [db.attraction_categories, db.cities],
    });
    res.json(attractions);
  } catch (e) {
    console.log(e);
    }
};

// Get attraction by ID
const getAttractionById = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
      await Attraction.findByPk(id).then(attraction => {
          if (attraction) {
              return res.status(400).json(attraction.toJSON());
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
const createAttraction = async (req, res) => {
  const {name, price, desc, photo, address, coordinate, open_day, close_day, open_hour, close_hour} = req.body;
  try {
    const newAttraction = await Attraction.create({
      name_attraction: name,
      price_attraction: price,
      desc_attraction: desc,
      photo_attraction: photo,
      address_attraction: address,
      coordinate_attraction: coordinate,
      open_day: open_day,
      close_day: close_day,
      open_hour: open_hour,
      close_hour: close_hour
    });
    res.status(201).json(newAttraction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an attraction by ID
const updateAttraction = async (req, res) => {
  const id = parseInt(req.params.id);
  const {name, price, desc, photo, address, coordinate, open_day, close_day, open_hour, close_hour} = req.body;
  try {
    const attraction = await Attraction.findByPk(id);
    if (attraction) {
      const updatedAttraction = await attraction.update({
        name_attraction: name,
        price_attraction: price,
        desc_attraction: desc,
        photo_attraction: photo,
        address_attraction: address,
        coordinate_attraction: coordinate,
        open_day: open_day,
        close_day: close_day,
        open_hour: open_hour,
        close_hour: close_hour
      });
      return res.status(200).json({ message: 'Attraction updated successfully', attraction: updatedAttraction });
    } else {
      return res.status(404).json({ message: 'Attraction not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete an attraction by ID
const deleteAttraction = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const attraction = await Attraction.findByPk(id);
      if (attraction) {
          await attraction.destroy();
          return res.status(200).json({ message: 'Attraction deleted successfully' });
      } else {
          return res.status(404).json({ message: 'Attraction not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllAttractions,
  getAttractionById,
  createAttraction,
  updateAttraction,
  deleteAttraction,
};