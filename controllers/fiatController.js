const { FiatCurrency } = require('../models');

exports.getFiats = async (req, res) => {
  try {
    const fiats = await FiatCurrency.findAll();
    res.json(fiats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
