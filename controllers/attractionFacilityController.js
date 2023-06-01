const db = require("../models");
const Facility = db.facilities;

// Get attraction facility by ID
const getAttractionFacilitiesById = async (req, res) => {
  try {
    const { id_attraction } = req.params;

    // searching all data relation by id_attraction
    const relations = await Relation_Attraction_Facility.findAll({
      where: { id_attraction },
      include: [Facility],
    });

    // showing data facility from relation model
    const facilities = relations.map((relation) => relation.Facility);
    res.status(200).json({ facilities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    getAttractionFacilitiesById,
}