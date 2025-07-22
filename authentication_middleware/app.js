const config = require('./config');
const express = require('express');
const port = config.port;
const app = express();
app.use(express.json());

const authMiddleware = (req, res, next) => {
    const originalKey = config.apiKey;
    const providedKey = req.header('x-api-key');
    console.log(`received Api-key is: ${providedKey}`);

    if(!providedKey) {
        res.status(401).json({
            Error : "The Api key is Unauthorized"
        })
    }

    if(providedKey === originalKey) {
        next();
    } else {
        res.json({
            error: "not authenticated"
        })
    }
    
}


app.get("/protected", authMiddleware, (req, res) => {
    res.json({
        message: 'You have successfully accessed the protected data!',
        data: {
            secret: 'The password to the speakeasy is "swordfish".'
        }
    });
})

app.get("/:name" ,(req, res) => {
    res.status(200).json({
        message : "You are Successfully Connected to the Server!"
    });
});



app.listen(port, () => {
    console.log(`Server Listening at Port: ${port}`);
    console.log(`The environment is: ${config.nodeEnv}`);
})