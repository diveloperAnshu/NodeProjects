const express = require('express')
const app = express()

const config = require('./config');
const port = config.port;

const userRoute = require('./route/user');
app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`App listening at port: ${port}`);
})