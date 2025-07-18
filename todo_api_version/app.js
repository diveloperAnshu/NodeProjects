const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`App listening at port : ${port}`);
});