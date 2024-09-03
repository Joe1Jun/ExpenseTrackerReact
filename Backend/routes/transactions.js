//import the routes module
const router = require('express').Router()
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
//import methods from controller
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
//const verifyToken = require('../middleware/verifyToken')
const { registerUser, loginUser, logout} = require('../controllers/user')

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
router
      .post('/register', registerUser)
      .post('/login', loginUser)
      .post('/logout', logout )


module.exports = router