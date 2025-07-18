const express = require('express')
const router = express.Router();


router.get("/:profileName", (req, res) => {
    const name = req.params.profileName;
    if(name === 'anshuman') {
        res.status(200).json({
            message : `Your profile name is: ansh_u_oo7`,
        });
    } else {
        res.status(200).json({
            message : `you dont have a profile name, make one!\n`,
        });
    }
});


module.exports = router;