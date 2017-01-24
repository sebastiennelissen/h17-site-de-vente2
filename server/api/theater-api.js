var express = require('express');
var router = express.Router();

// Define the home page route
router.get('/theater', function(req, res) {
    res.json({'test': 'theater'})
});

module.exports = router;