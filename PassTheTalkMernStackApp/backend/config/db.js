const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const colors = require("colors");

const connectDb = async() => {
    try{
        const conn = await mongoose.connect("mongodb+srv://ragulnenni:14031403@cluster0.p8djnuw.mongodb.net/?retryWrites=true&w=majority" , {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            
        });
        console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
    }catch(err){
        console.log(`Error : ${err.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDb;