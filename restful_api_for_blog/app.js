const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const blogsRoute = require('./routes/blogs');
app.use('/blogs', blogsRoute);

app.listen(port, () => {
    console.log(`App listening at POrt: ${port}`);
});