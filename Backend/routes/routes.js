//import the routes module
const router = require('express').Router()
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
//import methods from controller
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
//const verifyToken = require('../middleware/verifyToken')
const { registerUser, loginUser, logout} = require('../controllers/user')
const verifyToken = require('../middleware/verifyToken')

//chain all routes that access the IncomeSchema for better readibility
router  
      .post('/add-income',verifyToken, addIncome)
      .get('/get-incomes',verifyToken, getIncomes)
      // id in the path is a route parameter, which allows the route to accept any ID value.
      .delete('/delete-income/:id',verifyToken, deleteIncome)
router
      .post('/add-expense', verifyToken, addExpense)
      .get('/get-expenses',verifyToken, getExpense)
      .delete('/delete-expense/:id',verifyToken, deleteExpense)      
router
      .post('/register', registerUser)
      .post('/login', loginUser)
      .post('/logout', logout )


module.exports = router