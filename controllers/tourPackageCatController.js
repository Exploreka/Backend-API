const db = require("../models");
const Package_category = db.tour_packages;

// Get tour package category by ID
const getTourPackageCatById = async (req, res) => {
  try {
    const { id_tour_package } = req.params;

    // searching all data relation by id_attraction
    const relations = await db.relation_tour_package_cats.findAll({
      where: { id_tour_package },
      include: [Package_category],
    });

    // showing data facility from relation model
    const package_cat = relations.map((relation) => relation.Package_category);
    res.status(200).json({ package_cat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    getTourPackageCatById,
}