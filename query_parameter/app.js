const express = require('express')
const app = express();
const port = 3000;

app.get("/profile", (req, res) => {
    const name = req.query.name;
    const profileName = req.query.profileName;
    res.status(200).json({
        message : `Your Name is : ${name}  and Your Profile Name is: ${profileName}`
    });
});

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
})