const router = require('express').Router();

router.get('/getItem', 
    (req, res) => {
        res.json("hi");
    }
) 
router.post('/addItem', 
    (req, res) => {

    }
) 

module.exports = router;