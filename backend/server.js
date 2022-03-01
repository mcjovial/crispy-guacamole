const express = require('express');
const dotenv = require('dotenv');
const chats = require('./src/data/data');
const mongoConnect = require('./src/services/mongo');

dotenv.config();
mongoConnect();
const app = express();

const PORT = process.env.PORT;

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));