//(npm install --same-dev cross-env) is used to handle different os for different environment

const config = require("./config");
const express = require('express');
const app = express();
const port = config.port;

app.get("/:name", (req, res) => {
    const name = req.params.name;
    res.status(200).json({
        message : `Welcome ${name}`
    })
});

app.listen(port, () => {
    console.log(`Server Listening at port: ${port}`);
    console.log(`The Environment is: ${config.nodeEnv}`);
})