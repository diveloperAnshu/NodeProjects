const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const data = {
        message: 'This is a more organized API route!',
        timestamp: new Date().toISOString()
    };
    res.json(data);
});

module.exports = router;