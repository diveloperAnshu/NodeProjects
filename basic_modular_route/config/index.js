require('dotenv').config();

const config = {
    port : process.env.PORT,
}

module.exports = Object.freeze(config);