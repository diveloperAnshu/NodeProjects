const express = require('express')
const app = express();
const port = 3000;



const requestLogger = (req, res, next) => {
    console.log(`The Method of this call is: ${req.method} and the original URL of this call is: ${req.originalUrl}`);
    next();
};
app.use(requestLogger);


const apiRoutes = require("./routes/profile")
app.use("/profile", apiRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message : "You are in Home page now!.\n",
    });
});

app.get("/about", (req, res) => {
    res.status(200).json({
        message : "You are in about page now!\n",
    });
});

app.get("/contact", (req, res) => {
    res.status(200).json({
        message : "You are in contact page now!\n",
    });
});

app.listen(port, () => {
    console.log(`App listening on Port: ${port}`);
})