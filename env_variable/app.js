// Load env variables from the .env file
require('dotenv').config();

const express = require('express');

const app = express();

//use the variavles present in the .env file for your use
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).json({
        message : "Welcome!"
    })
});

app.listen(port, () => {
    console.log(`App listening at port: ${port}`);
})