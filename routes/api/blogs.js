const router = require('express').Router(); 
const booksController = require('../../controllers/blogsController'); 

// Matches with 'api/articles' 

router.route('/')
  .get(blogsController.findAll)
  .post(blogsController.create); 

// Matches with '/api/articles/:id' 
router
  .route('/:id')
  .get(blogsController.findById)
  .put(blogsController.update)
  .delete(blogsController.remove); 

module.exports = router; 