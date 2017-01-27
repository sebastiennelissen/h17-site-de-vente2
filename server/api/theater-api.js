var express = require('express');
var router = express.Router();

/**
 * @api {get} /theater/:id Get data of a theater
 * @apiName GetTheater
 * @apiGroup Theater
 *
 * @apiDescription Get all attributes of a theater
 *
 * @apiParam (URL parameter) {Integer} :id Theater unique ID
 *
 * @apiSuccess {Integer}    adminId     ID of the administrator
 * @apiSuccess {String}     name        Name
 * @apiSuccess {String}     address     Street number and street name
 * @apiSuccess {String}     city        City
 * @apiSuccess {String}     province    Province
 * @apiSuccess {Integer}    capacity    Capacity
 *
 */
router.route('/theater/:id').get(function(req, res) {
    var res_body =
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        };

    res.status(200).json(res_body);
});

/**
 * @api {delete} /theater/:id Delete a theater
 * @apiName DeleteTheater
 * @apiGroup Theater
 *
 * @apiDescription Delete a theater. Not possible if there are show scheduled in the theater.
 *
 * @apiParam (URL parameter) {Integer} :id Theater unique ID
 *
 */
router.route('/theater/:id').delete(function(req, res) {
    res.status(200).json();
});

/**
 * @api {post} /theater Create a theater
 * @apiName CreateTheater
 * @apiGroup Theater
 *
 * @apiDescription Create a new theater
 *
 * @apiParam {Integer}  theaterId   Theater unique ID
 * @apiParam {Integer}  adminId     Administrator ID of the theater
 * @apiParam {String}   name        Name of theater
 * @apiParam {String}   address     Address
 * @apiParam {String}   city        City
 * @apiParam {String}   province    Province
 * @apiParam {Integer}  capacity    Capacity of theater
 *
 * @apiSuccess (Success 201) {Integer}    theaterId   ID of the theater
 * @apiSuccess (Success 201) {Integer}    adminId     ID of the administrator
 * @apiSuccess (Success 201) {String}     name        Name
 * @apiSuccess (Success 201) {String}     address     Street number and street name
 * @apiSuccess (Success 201) {String}     city        City
 * @apiSuccess (Success 201) {String}     province    Province
 * @apiSuccess (Success 201) {Integer}    capacity    Capacity
 *
 */
router.route('/theater').post(function(req, res){
    var res_body =
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        };

    res.status(201).json(res_body);
});

/**
 * @api {put} /theater/:id Update all data of a theater
 * @apiName UpdateAllTheater
 * @apiGroup Theater
 *
 * @apiDescription Update every attributes of a theater. All attributes must be included in the request.
 *
 * @apiParam (URL parameter) {Integer} :id Theater unique ID
 *
 * @apiParam {Integer}  theaterId   Theater unique ID
 * @apiParam {Integer}  adminId     Administrator ID of the theater
 * @apiParam {String}   name        Name of theater
 * @apiParam {String}   address     Address
 * @apiParam {String}   city        City
 * @apiParam {String}   province    Province
 * @apiParam {Integer}  capacity    Capacity of theater
 *
 * @apiSuccess (Success 201) {Integer}    theaterId  ID of the theater
 * @apiSuccess (Success 201) {Integer}    adminId    ID of the administrator
 * @apiSuccess (Success 201) {String}     name        Name
 * @apiSuccess (Success 201) {String}     address     Street number and street name
 * @apiSuccess (Success 201) {String}     city        City
 * @apiSuccess (Success 201) {String}     province    Province
 * @apiSuccess (Success 201) {Integer}    capacity    Capacity
 *
 */
router.route('/theater/:id').put(function(req, res){
    var res_body =
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        };

    res.status(200).json(res_body);
});

/**
 * @api {patch} /theater/:id Update a theater
 * @apiName UpdateTheater
 * @apiGroup Theater
 *
 * @apiDescription Update one or few attributes of a theater.
 *
 * @apiParam (URL parameter) {Integer} :id Theater unique ID
 *
 * @apiParam {Integer}  [theaterId]   Theater unique ID
 * @apiParam {Integer}  [adminId]     Administrator ID of the theater
 * @apiParam {String}   [name]        Name of theater
 * @apiParam {String}   [address]     Address
 * @apiParam {String}   [city]        City
 * @apiParam {String}   [province]    Province
 * @apiParam {Integer}  [capacity]    Capacity of theater
 *
 * @apiSuccess (Success 201) {Integer}    theaterId  ID of the theater
 * @apiSuccess (Success 201) {Integer}    adminId    ID of the administrator
 * @apiSuccess (Success 201) {String}     name        Name
 * @apiSuccess (Success 201) {String}     address     Street number and street name
 * @apiSuccess (Success 201) {String}     city        City
 * @apiSuccess (Success 201) {String}     province    Province
 * @apiSuccess (Success 201) {Integer}    capacity    Capacity
 *
 */
router.route('/theater/:id').patch(function(req, res){
    var res_body =
        {
            "theaterId": parseInt(req.params.id),
            "adminId": 980198,
            "name": "Metropolis",
            "address": "1000 rue Ste-Catherine",
            "city": "Montreal",
            "province": "Quebec",
            "capacity": 750
        };

    res.status(200).json(res_body);
});

module.exports = router;