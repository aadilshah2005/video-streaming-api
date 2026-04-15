import express from 'express';
import dotenv from 'dotenv';
import { connetDB } from './db/db.js';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello videos");
});

app.listen(PORT, () => {
    connetDB();
   console.log(`Server running on port ${PORT}`);
})