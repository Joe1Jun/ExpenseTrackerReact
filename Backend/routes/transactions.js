//import the routes module
const router = require('express').Router()
//import methods from controller
const{ addIncome, getIncomes, deleteIncome } = require('../controllers/income')

//add a get request 
router.post('/add-income', addIncome)
      .get('/get-incomes',getIncomes)
      .delete('/delete-income/:id', deleteIncome)

module.exports = router