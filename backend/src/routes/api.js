const express = require('express');
const chatsRouter = require('./chats/chats.router');
const messagesRouter = require('./messages/messages.router');

const usersRouter = require('./users/users.router');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/chats', chatsRouter);
api.use('/messages', messagesRouter);

module.exports = api;