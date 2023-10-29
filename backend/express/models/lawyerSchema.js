const mongoose = require('mongoose');
const { Schema } = mongoose;

const Products = new Schema({
        name: {
            type: String,
            required: true
        },
        jusrisdiction:{
            type: Array,
            required: true
        },
        languages:{
            type: Array,
            required: true
        },
        feedback:{
            type: Number,
            required: false,
        },
        location:{
            type: String,
            required: true
        },
        probono:{
            type: Boolean,
            required : false,
        },
        demographics:{
            type: String,
            required: true
        },
        hire:{
            type: Array,
            required: false
        }
}, 
{ collection: 'lawyerdb' }
);
module.exports = mongoose.model('lawyerdb', Products)