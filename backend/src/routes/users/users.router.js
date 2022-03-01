const express = require('express');
const { registerUser, loginUser } = require('./users.controller');
const usersRouter = express.Router();

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get("/chat", (req, res) => {
    res.send('chats');
});

module.exports = usersRouter;