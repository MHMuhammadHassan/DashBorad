const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const card = require('./routes/cardRoute');
const appiontment = require('./routes/Appointment')
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Use the routes
app.use('/dashborad', card);
app.use('/dashborad', appiontment);


app.get('/', (req, res) => {
    res.send('API hit');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
