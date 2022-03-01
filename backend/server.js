const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/api/chat", (req, res) => {
    res.send("API is running..");
});

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));