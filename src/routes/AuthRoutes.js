const express = require('express');
const response = require('../models/Response');
const controller = require('../controllers/AuthController')();

module.exports = _ => {
    const authRouter = express.Router();

    authRouter.route('/login').post(controller.postLogin);

    authRouter.route('/login').get(controller.getLogin);

    authRouter.route('/register').post(controller.postRegister);

    return authRouter;
}