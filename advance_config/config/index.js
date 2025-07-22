// this contains the centralized configuration ligic
/*
Now you can run npm start to run your app in production mode.
And npm run dev to run it in development mode.
*/
require('dotenv').config();

const config = {
    port : process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development'
};

module.exports = Object.freeze(config)