var express = require('express');

var router = express.Router();

router.use('/', require('./show-api'));
router.use('/', require('./theater-api'));

module.exports = router;