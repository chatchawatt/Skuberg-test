const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Received ${req.method} request at ${req.url}`);
    next();
  });

const userController = require('../controllers/userController');
const walletController = require('../controllers/walletController');
const orderController = require('../controllers/orderController');
const transactionController = require('../controllers/transactionController');
const fiatController = require('../controllers/fiatController');
const cryptoController = require('../controllers/cryptoController');

router.get('/users', userController.getUsers);
router.get('/wallets', walletController.getWallets);
router.get('/orders', orderController.getOrders);
router.get('/transactions', transactionController.getTransactions);
router.get('/cryptoes', cryptoController.getCryptoes);
router.get('/fiats', fiatController.getFiats);
router.get('/test', (req, res) => {
    res.send('This is a test route');
  });

module.exports = router;
