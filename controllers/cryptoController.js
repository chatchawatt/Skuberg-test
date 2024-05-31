const { Cryptocurrency } = require('../models');

exports.getCryptoes = async (req, res) => {
  try {
    const cryptoes = await Cryptocurrency.findAll();
    res.json(cryptoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
