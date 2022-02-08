const mongoose = require('mongoose');

//Create The Schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

//Create the Model

var Product = mongoose.model('Product', ProductSchema);

//Export
module.exports.Product = Product;
