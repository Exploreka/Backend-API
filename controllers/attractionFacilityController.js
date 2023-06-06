const db = require("../models");
const Attraction = db.attractions
const Facility = db.facilities
const Relation_Facility_Attraction = db.relation_facility_attractions

// Get all attractions
const getAllFacility = async (req, res) => {
  try {
    const facility = await Facility.findAll();
    return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: facility});
  } catch (e) {
    console.log(e);
    }
};

// Get tour package category by ID
const getFacilityByIdAttraction = async (req, res) => {
  const id = req.params.id;

  try {
    const relations = await Relation_Facility_Attraction.findAll({
      where: { id_attraction: id },
      include: [db.facilities],
    });

    res.json(relations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllFacility,
  getFacilityByIdAttraction
}