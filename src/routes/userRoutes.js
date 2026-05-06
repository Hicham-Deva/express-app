const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { createUser } = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;