const express = require('express');
const { protect } = require('../../middlewares/auth.middleware');
const { accessChat, fetchChats } = require('./chats.controller');

const chatsRouter = express.Router();

chatsRouter.get('/', protect, fetchChats)
chatsRouter.post('/', protect, accessChat)
chatsRouter.post('/group', protect)
chatsRouter.put('/rename', protect)
chatsRouter.put('/group-remove', protect)
chatsRouter.put('/group-add', protect)

module.exports = chatsRouter