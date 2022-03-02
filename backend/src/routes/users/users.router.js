const express = require('express');
const { protect } = require('../../middlewares/auth.middleware');
const { registerUser, loginUser, allUsers } = require('./users.controller');
const usersRouter = express.Router();

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/', protect, allUsers)

module.exports = usersRouter;