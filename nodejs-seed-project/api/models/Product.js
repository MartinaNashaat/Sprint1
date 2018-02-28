const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date ,

  seller: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

  }
});

mongoose.model('Product', productSchema);
