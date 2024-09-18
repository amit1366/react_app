// const mongoose = require('mongoose');
// const userSchema = new Schema({
//     Name: {
//         type:string,
//         required:true
//     },
//     email:{
//         type:string,
//         required: true
//     },
//     passwerd:{
//         type:string,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }
//   });

//   module.exports = mongoose.model('user', userSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;  // Import Schema from mongoose

const userSchema = new Schema({
    Name: {
        type: String,      // Capital 'S' for String
        required: true
    },
    email: {
        type: String,      // Capital 'S' for String
        required: true
    },
    passwerd: {
        type: String,      // Capital 'S' for String
        required: true
    },
    date: {
        type: Date,        // Correct Date type
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);  // 'User' model created
