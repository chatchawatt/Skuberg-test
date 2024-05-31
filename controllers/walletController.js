const { Wallet } = require('../models');

exports.getWallets = async (req, res) => {
  try {
    const wallets = await Wallet.findAll();
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
