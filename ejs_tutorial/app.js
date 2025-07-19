const express = require('express')
const app = express()
const port = 3000


// --- Configuration ---
// 1. Tell Express to use EJS as its view engine.
//    This lets us use `res.render()` to generate HTML.
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const data = {
        pageTitle : "Anshuman's Page",
        message : "Hello from my BlogPost"
    }
    res.render('index', data);
});


app.listen(port , () => {
    console.log(`App listening at Port: ${port}`);
})