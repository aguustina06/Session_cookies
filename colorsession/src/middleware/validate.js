const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Insertar nombre'),
    check('email')
    .notEmpty().withMessage('Insertar email').bail()
    .isEmail().withMessage('Ingresar email valido'),
    check('color')
    .notEmpty().withMessage('Elegir color'),
    check('edad')
    .inInt().withMessage('tiene que ser un numero')
]