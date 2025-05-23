const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected`);
    } catch (err) {
        console.log(`DB Error`);
    }
}

module.exports = connectDB;
