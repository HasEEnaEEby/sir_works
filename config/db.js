const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/db_futsal_management_system");
        console.log("Mongodb Connected")
    } catch (e){
        console.log("Mongodb not connected")
    }
}

module.exports = connectDB;