const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req , res) => {
    res.send('api hit');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });