module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      order_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL(18, 8),
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(18, 8),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Order'
    });
    return Order;
  };
  