//import the routes module
const router = require('express').Router()
//import addIncome method
const{ addIncome } = require('../controllers/income')

//add a get request 
router.post('/add-income', addIncome)

module.exports = router