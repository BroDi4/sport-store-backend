import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as productController from './controllers/productController.js';
import * as categoryController from './controllers/categoryController.js';
import * as orderController from './controllers/orderController.js';
import * as userController from './controllers/userController.js';

import { userValitdation } from './validations.js';
import { handleValidationsErrors } from './utils/handleValidationsErrors.js';
import checkAuth from './utils/checkAuth.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: ['/http://localhost:3000', 'https://sport-store-skwh.onrender.com'] }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server started on port ${process.env.PORT || 4000}`);
});

app.get('/products', productController.getALl);

app.get('/products/:id', productController.getOne);

app.get('/categories', categoryController.getCategory);

app.post('/order', checkAuth, orderController.createOrder);

app.post('/login', userController.login);

app.post('/register', userValitdation, handleValidationsErrors, userController.reqister);

app.get('/user', checkAuth, userController.getUser);

app.patch('/user', checkAuth, userController.update);
