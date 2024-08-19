const express = require('express');
const mongoose = require('mongoose');
//import Product schema 
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
const app = express();
//middleware configuration

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute)

//testing 
app.get('/', (req, res) => {
    res.send('Hello from node api server');
});

//connection to database

mongoose.connect("mongodb+srv://kendrickruby:t3chg3niu$444@backendtutorial.n6vej.mongodb.net/BackendTutorial?retryWrites=true&w=majority&appName=BackendTutorial")
    .then(() => {
        console.log("connected to the database")
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch(() => {
        console.log("connection failed!")
    })
