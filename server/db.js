const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://test1234:test1234@cluster0.aoulv.mongodb.net/MERNPIZZA";

mongoose.connect (mongoURL);

var db= mongoose.connection;

db.on('connected',()=>{
    console.log("Database connected sucessfully...")
})

db.on('error',()=>{
    console.log("Database not connected sucessfully...")
})


module.export = mongoose