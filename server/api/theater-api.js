var express = require('express');
var router = express.Router();

/**
 * @api {get} /theater/:id Request data of a theater
 * @apiName GetTheater
 * @apiGroup Theater
 *
 * @apiParam {Integer} id Theater unique ID
 *
 * @apiSuccess {String} adminId ID of the administrator
 * @apiSuccess {String} name        Name
 * @apiSuccess {String} address     Street number and street name
 * @apiSuccess {String} city        City
 * @apiSuccess {String} province    Province
 * @apiSuccess {String} capacity    Capacity
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "theaterId": 1
 *       "adminId": 980198,
 *       "name": "Metropolis",
 *       "address": "1000 rue Ste-Catherine".
 *       "city": "Montreal",
 *       "province": "Quebec",
 *       "capacity": 750
 *     }
 *
 * @apiError TheaterNotFound The theater with the given ID was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TheaterNotFound"
 *     }
 */
router.route('/theater/:id').get(function(req, res) {
    res.json(
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        }
    );
});

/**
 * @api {delete} /theater/:id Delete a theater
 * @apiName DeleteTheater
 * @apiGroup Theater
 *
 * @apiParam {Integer} id Theater unique ID
 *
 * @apiSuccess {String} adminId ID of the administrator
 * @apiSuccess {String} name        Name
 * @apiSuccess {String} address     Street number and street name
 * @apiSuccess {String} city        City
 * @apiSuccess {String} province    Province
 * @apiSuccess {String} capacity    Capacity
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "theaterId": 1
 *       "adminId": 980198,
 *       "name": "Metropolis",
 *       "address": "1000 rue Ste-Catherine".
 *       "city": "Montreal",
 *       "province": "Quebec",
 *       "capacity": 750
 *     }
 *
 * @apiError TheaterNotFound The theater with the given ID was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TheaterNotFound"
 *     }
 */
router.route('/theater/:id').delete(function(req, res) {
    res.json(
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        }
    );
});

module.exports = router;