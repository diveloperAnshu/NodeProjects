const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message : "Hello!",
    });
});

router.get("/:name", (req, res) => {
    const name = req.params.name;
    res.status(200).json({
        message : `Hello Mr. ${name}`,
    });
});

module.exports = router;