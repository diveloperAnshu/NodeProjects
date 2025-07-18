const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello user");
})
app.get("/about" , (req, res) => {
    res.send("You are now at the about page!");
})

app.get("/Home", (req, res) => {
    res.send("You are now at the home page!");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})