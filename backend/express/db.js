require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI =  process.env.MONGODB_URI
const connectToMongo = async () =>{
    const result = await mongoose.connect(mongoURI)
    if(!result.err)
    console.log("connected to Mongo")
    // mongoose.connect(mongoURI, ()=>console.log("connected to Mongo"))
}
module.exports = connectToMongo;