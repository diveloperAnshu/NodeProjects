const express = require('express')
const router = express.Router();

router.get("/:profile", (req, res) => {
    const profile = req.params.profile;
    if(profile === 'anshuman') {
        res.json({
                id : 1,
                "name" : "ansh_u_man"
            }
        );
    } else {
        res.json({
            message : "enter valid Profile",
        });
    }
});

module.exports = router;