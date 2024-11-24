const mongoose = require('mongoose'); // import mongoose
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("connected to mongo db successfully");
}catch(er)
{
    console.log('mongo db connection error', er.message)
}
}

module.exports = connectDB;