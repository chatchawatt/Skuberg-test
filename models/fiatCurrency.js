module.exports = (sequelize, DataTypes) => {
  const FiatCurrency = sequelize.define('FiatCurrency', {
    fiat_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fiat_symbol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FiatCurrency'
  });
  return FiatCurrency;
};
