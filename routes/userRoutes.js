// routes/userRoutes.js
const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');

const router = express.Router();

// @route GET /api/users
// @desc Get all users
router.get('/', getAllUsers);

// @route POST /api/users
// @desc Create a new user
router.post('/', createUser);

module.exports = router;
