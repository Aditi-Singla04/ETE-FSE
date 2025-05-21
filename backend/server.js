const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./middleware/db');
const complaintRoutes = require('./routers/complaintRouter');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/complaints', complaintRoutes);

// DB & Server Init
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
