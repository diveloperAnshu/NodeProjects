require('dotenv').config();

const config = {
    port : process.env.PORT,
    nodeEnv : process.env.NODE_ENV,
    apiKey : process.env.API_KEY
}

module.exports = Object.freeze(config);