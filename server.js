const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.once('open', async () => {
    try {
        app.listen(PORT, () => {
            console.log(`API server running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
    });