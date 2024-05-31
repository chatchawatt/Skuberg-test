
module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    balance: {
      type: DataTypes.DECIMAL(18, 8),
      allowNull: false
    }
  });

  return Wallet;
};
