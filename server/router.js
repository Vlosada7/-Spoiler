const express = require('express');
const router = express.Router();
const controller = require('./controller/user');

router.post('/login', controller.login);
router.post('/create', controller.create);
router.get('/profile', controller.profile);
router.post('/logout', controller.logout);
router.get('/home', controller.getFav);
router.post('/home/id', controller.favShow);
// router.get();

module.exports = router;