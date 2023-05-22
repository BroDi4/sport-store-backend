import { body } from 'express-validator';

export const orderValidation = [
  body('email', 'Неправильный формат почты').isEmail(),
  body('fullname', 'Укажите имя').isLength({ min: 3 }),
  body('phone', 'Укажите телефон').optional().isMobilePhone('ru-RU'),
];

export const userValitdation = [
  body('email', 'Неправильный формат почты').isEmail(),
  body('fullname', 'Минимальное количество символов для имени - 3').isLength({ min: 3 }),
  body('password', 'Минимальное количество символов для пароля - 5').isLength({ min: 5 }),
];
