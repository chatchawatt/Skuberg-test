// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Transaction = sequelize.define('Transaction', {
//   amount: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false
//   },
//   transaction_type: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// module.exports = Transaction;

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      transaction_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Transaction;
  };
  