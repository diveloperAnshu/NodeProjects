const express = require('express')
const app = express()
const port = 3000


app.get("/", (req, res) => {
    res.status(200).json({
        message : "Welcome"
    });
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})