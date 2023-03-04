const express = require('express');
const router = express.Router();
const controller = require('./controller/user');

// router.post('/login', controller.login);
// router.post('/create/:username', controller.create);
// router.get('/profile', controller.profile);
// router.post('/logout', controller.logout);
router.get('/home/:username', controller.getFav);
router.post('/show/:id', controller.favShow);
router.delete('/:username/show/:id', controller.deleteShow);
// router.get();

module.exports = router;