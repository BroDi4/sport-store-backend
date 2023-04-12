import { body } from 'express-validator';

export const orderValidation = [
  body('email', 'Неправильный формат почты').isEmail(),
  body('fullname', 'Укажите имя').isLength({ min: 3 }),
  body('phone', 'Укажите телефон').optional().isMobilePhone('ru-RU'),
];
