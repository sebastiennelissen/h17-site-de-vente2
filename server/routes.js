var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // Can send directly index.hbs because of express.static
    res.render('index.hbs');
});

// TODO put in file
router.get('/search', function (req, res) {
    res.render('search.hbs');
});

router.get('/details', function (req, res) {
    res.render('details.hbs');
});

router.get('/confirmation', function (req, res) {
    res.render('confirmation.hbs');
});

router.get('/credit', function (req, res) {
    res.render('info-credit.hbs');
});

router.get('/connection', function (req, res) {
    res.render('info-personnelle.hbs');
});

router.get('/cart', function (req, res) {
    res.render('panier.hbs');
});

router.get('/search', function (req, res) {
    res.render('search.hbs');
});

router.get('/checkout', function (req, res) {
    res.render('checkout.hbs');
});

module.exports = router;
