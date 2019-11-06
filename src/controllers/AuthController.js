const responseModel = require('../models/Response');

const checkRegisterBody = (body) => {
    return body !== null
        && body.hasOwnProperty('firstName')
        && body.hasOwnProperty('lastName')
        && body.hasOwnProperty('username')
        && body.hasOwnProperty('email')
        && body.hasOwnProperty('password')
        && typeof body.email === "string"
};

module.exports = () => {

    const postLogin = (req, res) => {
        res.json(responseModel(true, "POST Success", null));
    }

    const getLogin = (req, res) => {
        res.json(responseModel(false, "GET Failed", null));
    }

    const postRegister = (req, res) => {
        const requestBody = req.body;
        console.log(requestBody);
        if (checkRegisterBody(requestBody)) {
            res.json(responseModel(true, "BODY Correct", null));
        } else {
            res.status(502).json(responseModel(false, "BODY Missing or invalid", null));
        }


    }


    return {
        postLogin,
        getLogin,
        postRegister
    }
}