const express = require('express');
const transactionController = require('../Controllers/transactionController');
const userController = require('../Controllers/userController');
const categoryController = require('../Controllers/categoryController');
const router = express.Router();

router.post('/addUser', userController.addUser);
router.get('/getUsers', userController.fetchUser);
router.post('/addCategory', categoryController.addCategory);
router.get('/getCategories', categoryController.fetchCategory);
router.post('/addRandomTransactions', transactionController.generateRandomTransactions);
router.get('/getTransactions', transactionController.fetchTransactions);

module.exports = router;