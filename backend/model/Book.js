const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// The Schema will have objects like name and author with defined properties

const bookSchema = new Schema({
    name:        {type: String, required: true},
    author:      {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    available:   {type: Boolean, required: true},
    image:       {type: String, required: true}
});

// export the schema to mongo db for creation of new schema

module.exports = mongoose.model("Book", bookSchema); 
// by default mongo DB creates the name as plural starting with small letter (Book --> books)