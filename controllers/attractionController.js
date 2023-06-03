const db = require("../models");
const Attraction = db.attractions;
const AttractionCat = db.attraction_categories;

// Get all attractions
const getAllAttractions = async (req, res) => {
  try {
    const attraction = await Attraction.findAll({
      include: [db.attraction_categories, db.cities],
      order: [['id_attraction', 'ASC']]
    });
    return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: attraction});
  } catch (e) {
    console.log(e);
    }
};

// Get attraction by ID
const getAttractionById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const attraction = await Attraction.findByPk(id, {
      include: [db.attraction_categories, db.cities],
    });
    if (attraction) {
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: attraction.toJSON() });
    } else {
      console.log('Attraction not found');
      res.status(404).json({ error: 'Attraction not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAttractionsByCategoryId = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const attractions = await Attraction.findAll({
      include: [
        {
          model: db.attraction_categories,
          where: { id_attraction_cat: id },
        },
        db.cities,
      ],
    });
    if (attractions.length > 0) {
      return res.status(200).json({
        status: 'Success',
        message: 'Data retrieved successfully!',
        data: attractions.map((attraction) => attraction.toJSON()),
      });
    } else {
      console.log('Attractions not found');
      res.status(404).json({ error: 'Attractions not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Create a new attraction
const createAttraction = async (req, res) => {
  const {name, price, desc, photo, address, coordinate, open_hour, close_hour, id_city, id_attraction_cat} = req.body;
  try {
    const newAttraction = await Attraction.create({
      name_attraction: name,
      price_attraction: price,
      desc_attraction: desc,
      photo_attraction: photo,
      address_attraction: address,
      coordinate_attraction: coordinate,
      open_hour: open_hour,
      close_hour: close_hour,
      id_city: id_city,
      id_attraction_cat: id_attraction_cat,
    });
    res.status(201).json({ status: 'Success', message: 'New attraction has been created!', data: newAttraction.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an attraction by ID
const updateAttraction = async (req, res) => {
  const id = parseInt(req.params.id);
  const {name, price, desc, photo, address, coordinate, open_hour, close_hour, id_city, id_attraction_cat} = req.body;
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
        open_hour: open_hour,
        close_hour: close_hour,
        id_city: id_city,
        id_attraction_cat: id_attraction_cat,
      });
      return res.status(200).json({ status: 'Success', message: 'Attraction updated successfully', data: updatedAttraction.toJSON() });
    } else {
      return res.status(404).json({ status: 'Failed', message: 'Attraction not found' });
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
          return res.status(200).json({ status: 'Success', message: 'Attraction deleted successfully!', data: attraction.toJSON() });
      } else {
          return res.status(404).json({ status: 'Failed', message: 'Attraction not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllAttractions,
  getAttractionById,
  getAttractionsByCategoryId,
  createAttraction,
  updateAttraction,
  deleteAttraction,
};