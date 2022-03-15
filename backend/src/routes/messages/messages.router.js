const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("./messages.controller");
const { protect } = require("../../middlewares/auth.middleware");
const messagesRouter = express.Router();

messagesRouter.get("/:chatId", protect, allMessages);
messagesRouter.post("/", protect, sendMessage);

module.exports = messagesRouter;
