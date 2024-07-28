//import the routes module
const router = require('express').Router()


//add a get request 
router.get('/', (req, res) => {
    
    res.send('Hello World')
})

module.exports = router