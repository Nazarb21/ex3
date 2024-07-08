const express = require('express');
const { registerUser, loginUser, getUser, updateUserDetails } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/users', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', authMiddleware, getUser);
router.put('/users/:id', authMiddleware, updateUserDetails);

module.exports = router;
