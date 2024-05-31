const { User, Wallet, Order, Transaction, FiatCurrency, Cryptocurrency, sequelize } = require('../models');

const seed = async () => {
  await sequelize.sync({ force: true });

  const user = await User.create({ username: 'chatchawat', email: 'chatchawat.p@ku.th', password: '123456789' });

  const fiatCurrency = await FiatCurrency.create({ fiat_name: 'Thai Baht', fiat_symbol: 'THB' });
  const cryptocurrency1 = await Cryptocurrency.create({ crypto_name: 'Bitcoin', crypto_symbol: 'BTC' });
  const cryptocurrency2 = await Cryptocurrency.create({ crypto_name: 'Etherium', crypto_symbol: 'ETH' });

  const wallet1 = await Wallet.create({ user_id: user.id, balance: 1000.00, fiat_id: fiatCurrency.id });
  const wallet2 = await Wallet.create({ user_id: user.id, balance: 1.50, crypto_id: cryptocurrency1.id });
  const wallet3 = await Wallet.create({ user_id: user.id, balance: 4.77, crypto_id: cryptocurrency2.id });

  const order = await Order.create({ user_id: user.id, crypto_id: cryptocurrency1.id, fiat_id: fiatCurrency.id, order_type: 'buy', amount: 1, price: 30000, status: 'open' });

  const transaction = await Transaction.create({ from_wallet_id: wallet1.id, to_wallet_id: wallet2.id, amount: 0.5, transaction_type: 'transfer' });
};

seed().then(() => {
  console.log('Database seeded!');
  process.exit();
});
