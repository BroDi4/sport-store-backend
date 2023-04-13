import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Product', ProductSchema);
