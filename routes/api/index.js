const router = require('express').Router(); 
const blogRoutes = require('./articles'); 

// Blog routes
router.use('/articles', blogRoutes); 

module.exports = router; 