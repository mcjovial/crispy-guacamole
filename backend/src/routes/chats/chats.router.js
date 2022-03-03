const express = require('express');
const { protect } = require('../../middlewares/auth.middleware');
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require('./chats.controller');

const chatsRouter = express.Router();

chatsRouter.get('/', protect, fetchChats);
chatsRouter.post('/', protect, accessChat);
chatsRouter.post('/group', protect, createGroupChat);
chatsRouter.put('/rename', protect, renameGroup);
chatsRouter.put('/group-remove', protect, removeFromGroup);
chatsRouter.put('/group-add', protect, addToGroup);

module.exports = chatsRouter;