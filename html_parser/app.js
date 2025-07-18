const express = require('express')
const app = express();
const port = 3000;

app.use(express.static("public"));

//This is the key middleware for parsing form data.
//It tells Express how to understand data sent from an HTML form.
app.use(express.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
    const name = req.body.username;
    res.status(200).json({
        message : `Hello ${name}! , your form was successfully submitted`,
    });
});

app.listen(port, () => {
    console.log(`app listening at port : ${port}`);
});