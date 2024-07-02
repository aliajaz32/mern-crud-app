const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://admin:admin@cluster0.xxby9.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoURI,{useNewUrlParser:true});

module.exports = mongoose;
