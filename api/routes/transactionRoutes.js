const express = require('express');
const router = express.Router();
const {createTransaction, testTransaction, getTransactions} = require('../controllers/transactionController');

// Define routes relative to the base path `/transaction`
router.post('/', createTransaction) // this will handle the post requests made to '/transactions/' endpoint 
router.get('/', getTransactions) // this will handle the get requests made to '/transactions' endpoint
router.get('/test',testTransaction); // this will handle the requests made to '/transaction/test' endpoint 



module.exports = router;