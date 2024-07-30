//import the routes module
const router = require('express').Router()
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
//import methods from controller
const{ addIncome, getIncomes, deleteIncome } = require('../controllers/income')

//chain all routes that access the IncomeSchema for better readibility
router  
      .post('/add-income', addIncome)
      .get('/get-incomes', getIncomes)
      // id in the path is a route parameter, which allows the route to accept any ID value.
      .delete('/delete-income/:id', deleteIncome)
router
      .post('/add-expense', addExpense)
      .get('/get-expenses', getExpense)
      .delete('/delete-expense/:id', deleteExpense)      

module.exports = router