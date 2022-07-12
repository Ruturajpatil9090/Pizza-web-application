
const express = require("express");

const Pizza = require("./models/pizzaModel");


const db = require("./db");

const port = process.env.PORT || 8000;

const app =express();


app.use(express.json());

const pizzaRoutes = require("./routes/pizzaRoutes");



app.use('/api/pizzas/',pizzaRoutes);


app.listen(port,()=>{
    console.log("server running on port 8000");
})
