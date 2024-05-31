const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, DataTypes);
const Wallet = require('./wallet')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const Transaction = require('./transaction')(sequelize, DataTypes);
const FiatCurrency = require('./fiatCurrency')(sequelize, DataTypes);
const Cryptocurrency = require('./cryptocurrency')(sequelize, DataTypes);

User.hasMany(Wallet, { foreignKey: 'user_id' });
Wallet.belongsTo(User, { foreignKey: 'user_id' });

Wallet.belongsTo(Cryptocurrency, { foreignKey: 'crypto_id' });
Wallet.belongsTo(FiatCurrency, { foreignKey: 'fiat_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.belongsTo(Cryptocurrency, { foreignKey: 'crypto_id' });
Order.belongsTo(FiatCurrency, { foreignKey: 'fiat_id' });

Transaction.belongsTo(Wallet, { as: 'fromWallet', foreignKey: 'from_wallet_id' });
Transaction.belongsTo(Wallet, { as: 'toWallet', foreignKey: 'to_wallet_id' });

module.exports = {
  sequelize,
  User,
  Wallet,
  Order,
  Transaction,
  FiatCurrency,
  Cryptocurrency
};
