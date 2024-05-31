module.exports = (sequelize, DataTypes) => {
    const Cryptocurrency = sequelize.define('Cryptocurrency', {
      crypto_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      crypto_symbol: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Cryptocurrency'
    });
    return Cryptocurrency;
  };
  