import OrderModel from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const doc = new OrderModel({
      email: req.body.email,
      fullname: req.body.fullname,
      phone: req.body.phone,
      orders: req.body.orders,
    });

    const data = await doc.save();

    res.status(200).json({
      id: data._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Не удалось сохранить заказ',
    });
  }
};
