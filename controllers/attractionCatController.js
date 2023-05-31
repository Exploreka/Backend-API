const db = require("../models");
const attraction_category = require("../models/attraction_category");
const AttractionCat = db.attraction_categories;
const { Op } = require('sequelize');

// Get all attraction categories
const getAllAttractionCat = async (req, res) => {
  try {
    const attraction_categories = await AttractionCat.findAll({});
    res.json(attraction_categories);
  } catch (e) {
    console.log(e);
    }
};

// Get attraction categories by ID
const getAttractionCatById = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
      await AttractionCat.findByPk(id).then(attraction_category => {
          if (attraction_category) {
              return res.status(400).json(attraction_category.toJSON());
          } else {
              console.log('Attraction Category not found')
          }
      }).catch(error => {
          console.error('Error:', error);
      });
  } catch (e) {
      res.status(400).json(e)
  }
}

// Create a new attraction category
const createAttractionCat = async (req, res) => {
  const {name} = req.body;
  try {
    const existingAttraction = await AttractionCat.findOne({ 
    where: {
      name_attraction_cat: {
        [Op.iLike]: name
      }
    } });
      if (existingAttraction) {
        return res.status(400).json({ msg: "Attraction already exists" });
      }
    const newAttractionCat = await AttractionCat.create({
      name_attraction_cat: name
    });
    res.status(201).json(newAttractionCat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an attraction category by ID
const updateAttractionCat = async (req, res) => {
  const id = parseInt(req.params.id);
  const {name} = req.body;
  try {
    const attraction_category = await AttractionCat.findByPk(id);
    if (attraction_category) {
      const updatedAttraction = await attraction_category.update({
        name_attraction_cat: name
      });
      return res.status(200).json({ message: 'Attraction updated successfully', attraction_category: updatedAttraction });
    } else {
      return res.status(404).json({ message: 'Attraction not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete an attraction by ID
const deleteAttractionCat = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const attraction_category = await AttractionCat.findByPk(id);
      if (attraction_category) {
          await attraction_category.destroy();
          return res.status(200).json({ message: 'Attraction category deleted successfully' });
      } else {
          return res.status(404).json({ message: 'Attraction category not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllAttractionCat,
  getAttractionCatById,
  createAttractionCat,
  updateAttractionCat,
  deleteAttractionCat,
};