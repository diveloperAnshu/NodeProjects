const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./routes/api')

app.use('/api', apiRoutes);
app.get("/" , (req, res) => {
    res.json({
        message : "Welcome to Anshu-gram",
    });
});

app.listen(port, () => {
    console.log(`App lIstening at port ${port}`);
})