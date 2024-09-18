const mongoose = require('mongoose');
const notesSchema = new Schema({
    title: {
        type:string,
        required:true
    },
    description:{
        type:string,
        required: true
    },
    tag:{
        type:string,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports = mongoose.model('user', notesSchema)