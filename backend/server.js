const express = require('express');
const dotenv = require('dotenv');
const chats = require('./src/data/data');
const mongoConnect = require('./src/services/mongo');
const api = require('./src/routes/api');
const { notFound, errorHandler } = require('./src/middlewares/error.middleware');

dotenv.config();
mongoConnect();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());    // to accept JSON Data

app.use('/v1/api', api);

app.use(notFound);
app.use(errorHandler)
app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));