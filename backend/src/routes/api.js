const express = require('express');
const chatsRouter = require('./chats/chats.router');

const usersRouter = require('./users/users.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/chats', chatsRouter);

module.exports = api;