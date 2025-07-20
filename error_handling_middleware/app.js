const express = require('express')
const app = express()
const port = 3000


app.get("/", (req, res) => {
    res.status(200).json({
        message : "Welcome"
    });
})

app.get("/broken", (req, res, next) => {
    try {
        throw new Error("This Route is Broken!");
    } catch(error) {
        next(error);
    }
})
const errorHandler = (err, req, res, next) => {
    console.log("<---------- ERROR ----------->");
   // console.error(err.stack);
    const statusCode = res.statusCode=== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        error: {
            message: err.message
        }
    });
}
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})