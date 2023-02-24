const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id} , "Ragul" , {
        expiresIn : "30d",
    });
};

module.exports = generateToken;