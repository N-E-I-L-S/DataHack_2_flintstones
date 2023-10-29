const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        bookmarks:{
            type: Array,
            required: false,
        },
        hire:{
            type: Array,
            required: false
        }
}, 
{ collection: 'user' }
);
module.exports = mongoose.model('user', UserSchema)