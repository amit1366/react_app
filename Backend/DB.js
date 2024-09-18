const mongoose = require('mongoose');
const mongooseURI = "mongodb://localhost:27017/";

const connectTomongoose = async () => {
    try {
        await mongoose.connect(mongooseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectTomongoose;
