import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: Number,
  orders: {
    type: Array,
    required: true,
  },
});

export default mongoose.model('Order', OrderSchema);
