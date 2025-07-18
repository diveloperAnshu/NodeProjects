const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./routes/api');

// Use the API routes with a prefix
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});