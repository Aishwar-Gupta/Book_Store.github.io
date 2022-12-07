const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');

const app = express();

// Middleware - contains the routes
app.use(express.json());
// app.use('/', (req, res, next) => {res.send('This is our starting app!');});
app.use(cors());
app.use('/books', router) // Localhost:5000/books


const URI = "mongodb+srv://admin:fScsX2Y6W9c9dTay@cluster0.di79ond.mongodb.net/bookStore?authSource=admin&retryWrites=true&w=majority";

// Connect to MongoDB cluster on atlas - Password for MongoDB - fScsX2Y6W9c9dTay

// mongoose.connect("mongodb+srv://admin:fScsX2Y6W9c9dTay@cluster0.di79ond.mongodb.net/bookStore?authSource=admin&retryWrites=true&w=majority")
// .then(() => console.log('Connected to Database'))
//     .then(() => {app.listen(5000);})
//     .catch((err) => console.log(err));


async function connect() 
{
    try
    {
        await mongoose.connect(URI);
        console.log("Connected to Mongo DB");
    }
    catch(err)
    {
        console.log(err);
    }
}

connect();

app.listen(5000, () => {console.log("App started on port 5000")});

var db = mongoose.connection;

