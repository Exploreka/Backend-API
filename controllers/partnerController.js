const db = require("../models");
const Partner = db.partners;

// Get all partners
const getAllPartners = async (req, res) => {
  try {
    const partner = await Partner.findAll({
        attributes: ["email_partner", "fullname_partner", "photo_partner"]
    });
    return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: partner});
  } catch (e) {
    console.log(e);
    }
};

// Get partner by ID
const getPartnerById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const partner = await Partner.findByPk(id, {
        attributes: ["email_partner", "fullname_partner", "desc_partner", "phone_partner", "photo_partner"]
    });
    if (partner) {
      return res.status(200).json({status: 'Success', message: 'Data retrieved successfully!', data: partner.toJSON() });
    } else {
      console.log('Partner not found');
      res.status(404).json({ error: 'Partner not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new partner
const createPartner = async (req, res) => {
  const {email, fullname, desc, address, phone, photo} = req.body;
  try {
    const newPartner = await Partner.create({
        email_partner: email,
        fullname_partner: fullname,
        desc_partner: desc,
        address_partner: address,
        phone_partner: phone,
        photo_partner: photo,
    });
    res.status(201).json({ status: 'Success', message: 'New partner has been created!', data: newPartner.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a partner by ID
const updatePartner = async (req, res) => {
  const id = parseInt(req.params.id);
  const {email, fullname, desc, address, phone, photo} = req.body;
  try {
    const partner = await Partner.findByPk(id);
    if (partner) {
      const updatedPartner = await partner.update({
        email_partner: email,
        fullname_partner: fullname,
        desc_partner: desc,
        address_partner: address,
        phone_partner: phone,
        photo_partner: photo,
      });
      return res.status(200).json({ status: 'Success', message: 'Partner updated successfully', data: updatedPartner.toJSON() });
    } else {
      return res.status(404).json({ status: 'Failed', message: 'Partner not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete a partner by ID
const deletePartner = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
      const partner = await Partner.findByPk(id);
      if ([partner]) {
          await partner.destroy();
          return res.status(200).json({ status: 'Success', message: 'Partner deleted successfully!', data: partner.toJSON() });
      } else {
          return res.status(404).json({ status: 'Failed', message: 'Partner not found' });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAllPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
};