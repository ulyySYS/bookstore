const express = require('express')
const router = express.Router();  

// GET TEST
router.get("/api", (req, res, next) => {
    res.send({ message: "YOU FINNALLY DID IT CONGRATSSS!!!" });
})



module.exports = router