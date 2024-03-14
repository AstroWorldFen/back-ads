const express = require('express');

const router = express.Router();


router.get("/produtos", function(req, resp){
    resp.json([])

});

module.exports = router;