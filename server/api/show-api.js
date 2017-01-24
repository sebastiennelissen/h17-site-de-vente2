var express = require('express');
var router = express.Router();

// Define the home page route
router.get('/show', function(req, res) {
    res.json({'test': 'show'})
});

module.exports = router;