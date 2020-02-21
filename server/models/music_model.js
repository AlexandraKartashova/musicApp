const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    song: {
        type: String, 
        required: true, 
        max: 100
    },
    author:{
        type: String, 
        required: true, 
        max: 100
    },
    time: {
        type: Number, 
        required: true
    },
});


// Export the model
module.exports = mongoose.model('music', musicSchema);