const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    type: {
      type: String,
      required: true,
    }
  },
  {
    id: false
  }
);


const Item = model('Item', itemSchema);

module.exports = Item;
