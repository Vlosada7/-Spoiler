const Express = require('express');
const router = Express.Router();
const userController = require('./controller/user');
const reviewController = require('./controller/review');

//User routes:
router.get('/home/:username', userController.getFav);
router.post('/show/:id', userController.favShow);
router.delete('/:username/show/:id', userController.deleteShow);

//Reviews routes:
router.get('/tv/:id/reviews', reviewController.getReviews);
router.post('/tv/:id/reviews', reviewController.postReview);



module.exports = router;