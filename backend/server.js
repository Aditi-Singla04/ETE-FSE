const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const complaintRoutes = require('./routers/complaintRouter'); // ✅ FIXED

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/complaints', complaintRoutes);

const connectDB = require('./middleware/db');
const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
