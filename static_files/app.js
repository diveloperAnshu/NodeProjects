const express = require('express')
const app = express()
const path = require('path')

const port = 3000
app.use(express.static(path.join(__dirname, 'public')));

app.get("/home", (req, res) => {
    res.send("You are at the home route.");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})