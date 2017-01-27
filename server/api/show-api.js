var express = require('express');
var router = express.Router();

/**
 * @api {get} /show/:id Get data of a show
 * @apiName GetShow
 * @apiGroup Show
 *
 * @apiDescription Get every attributes of a show.
 *
 * @apiParam (URL parameter) {Integer} :id Show unique ID
 *
 * @apiSuccess {Integer}    showId              ID of the show
 * @apiSuccess {Integer}    theaterId           ID of the theater
 * @apiSuccess {String}     sticker             Path to the sticker
 * @apiSuccess {String}     image               Path to the image
 * @apiSuccess {String}     title               Title
 * @apiSuccess {String}     artist              Artist participating in show
 * @apiSuccess {Date}       date                Date
 * @apiSuccess {Time}       time                Time
 * @apiSuccess {String}     description         Short text describing show
 * @apiSuccess {Boolean}    isPublished         True is show is visible
 * @apiSuccess {Boolean}    isOnSale            True if still available for sale
 *
 */
router.route('/show/:id').get(function(req, res) {
    var res_body =
        {
            'showId': parseInt(req.params.id),
            'theaterId': 123,
            'sticker': 'path/to/file',
            'image': 'path/to/image',
            'title': 'Disney On Ice',
            'artist': 'Disney crew',
            'date': '01/01/2017',
            'time': '19:00',
            'description': 'Young skaters doing tricks for kids on ice.',
            'isPublished': true,
            'isOnSale': false
        };

    res.status(200).json(res_body);
});

/**
 * @api {delete} /show/:id Delete a show
 * @apiName DeleteShow
 * @apiGroup Show
 *
 * @apiDescription Deletes a show and all of its tickets
 *
 * @apiParam (URL parameter) {Integer} :id Show unique ID
 */
router.route('/show/:id').delete(function(req, res) {
    res.status(200).json();
});

/**
 * @api {post} /show Create a show
 * @apiName CreateShow
 * @apiGroup Show
 *
 * @apiDescription Add a new show
 *
 * @apiParam {Integer}    showId              ID of the show
 * @apiParam {Integer}    theaterId           ID of the theater
 * @apiParam {String}     sticker             Path to the sticker
 * @apiParam {String}     image               Path to the image
 * @apiParam {String}     title               Title
 * @apiParam {String}     artist              Artist participating in show
 * @apiParam {Date}       date                Date
 * @apiParam {Time}       time                Time
 * @apiParam {String}     description         Short text describing show
 * @apiParam {Boolean}    isPublished         True is show is visible
 * @apiParam {Boolean}    isOnSale            True if still available for sale
 *
 * @apiSuccess (Success 201) {Integer}    showId              ID of the show
 * @apiSuccess (Success 201) {Integer}    theaterId           ID of the theater
 * @apiSuccess (Success 201) {String}     sticker             Path to the sticker
 * @apiSuccess (Success 201) {String}     image               Path to the image
 * @apiSuccess (Success 201) {String}     title               Title
 * @apiSuccess (Success 201) {String}     artist              Artist participating in show
 * @apiSuccess (Success 201) {Date}       date                Date
 * @apiSuccess (Success 201) {Time}       time                Time
 * @apiSuccess (Success 201) {String}     description         Short text describing show
 * @apiSuccess (Success 201) {Boolean}    isPublished         True is show is visible
 * @apiSuccess (Success 201) {Boolean}    isOnSale            True if still available for sale
 *
 */
router.route('/show').post(function(req, res){
    var res_body =
        {
            'showId': parseInt(req.params.id),
            'theaterId': 123,
            'sticker': 'path/to/file',
            'image': 'path/to/image',
            'title': 'Disney On Ice',
            'artist': 'Disney crew',
            'date': '01/01/2017',
            'time': '19:00',
            'description': 'Young skaters doing tricks for kids on ice.',
            'isPublished': true,
            'isOnSale': false
        };

    res.status(201).json(res_body);
});

/**
 * @api {put} /show/:id Update all data of a show
 * @apiName UpdateAllShow
 * @apiGroup Show
 *
 * @apiDescription Update every field of a show. All attributes must be included in the request.
 *
 * @apiParam (URL parameter) {Integer} :id    ID of the show
 *
 * @apiParam {Integer}    showId              ID of the show
 * @apiParam {Integer}    theaterId           ID of the theater
 * @apiParam {String}     sticker             Path to the sticker
 * @apiParam {String}     image               Path to the image
 * @apiParam {String}     title               Title
 * @apiParam {String}     artist              Artist participating in show
 * @apiParam {Date}       date                Date
 * @apiParam {Time}       time                Time
 * @apiParam {String}     description         Short text describing show
 * @apiParam {Boolean}    isPublished         True is show is visible
 * @apiParam {Boolean}    isOnSale            True if still available for sale
 *
 * @apiSuccess {Integer}    showId              ID of the show
 * @apiSuccess {Integer}    theaterId           ID of the theater
 * @apiSuccess {String}     sticker             Path to the sticker
 * @apiSuccess {String}     image               Path to the image
 * @apiSuccess {String}     title               Title
 * @apiSuccess {String}     artist              Artist participating in show
 * @apiSuccess {Date}       date                Date
 * @apiSuccess {Time}       time                Time
 * @apiSuccess {String}     description         Short text describing show
 * @apiSuccess {Boolean}    isPublished         True is show is visible
 * @apiSuccess {Boolean}    isOnSale            True if still available for sale
 *
 */
router.route('/show/:id').put(function(req, res){
    var res_body =
        {
            'showId': parseInt(req.params.id),
            'theaterId': 123,
            'sticker': 'path/to/file',
            'image': 'path/to/image',
            'title': 'Disney On Ice',
            'artist': 'Disney crew',
            'date': '01/01/2017',
            'time': '19:00',
            'description': 'Young skaters doing tricks for kids on ice.',
            'isPublished': true,
            'isOnSale': false
        };

    res.status(200).json(res_body);
});

/**
 * @api {patch} /show/:id Update a show
 * @apiName UpdateShow
 * @apiGroup Show
 *
 * @apiDescription Update only one or few fields of the show. Can be used to change the visibility of a show or end a sale.
 *
 * @apiParam (URL parameter) {Integer} :id  ID of the show
 *
 * @apiParam {Integer}    [showId]              ID of the show
 * @apiParam {Integer}    [theaterId]           ID of the theater
 * @apiParam {String}     [sticker]             Path to the sticker
 * @apiParam {String}     [image]               Path to the image
 * @apiParam {String}     [title]               Title
 * @apiParam {String}     [artist]              Artist participating in show
 * @apiParam {Date}       [date]                Date
 * @apiParam {Time}       [time]                Time
 * @apiParam {String}     [description]         Short text describing show
 * @apiParam {Boolean}    [isPublished]         True is show is visible
 * @apiParam {Boolean}    [isOnSale]            True if still available for sale
 *
 * @apiSuccess {Integer}    showId              ID of the show
 * @apiSuccess {Integer}    theaterId           ID of the theater
 * @apiSuccess {String}     sticker             Path to the sticker
 * @apiSuccess {String}     image               Path to the image
 * @apiSuccess {String}     title               Title
 * @apiSuccess {String}     artist              Artist participating in show
 * @apiSuccess {Date}       date                Date
 * @apiSuccess {Time}       time                Time
 * @apiSuccess {String}     description         Short text describing show
 * @apiSuccess {Boolean}    isPublished         True is show is visible
 * @apiSuccess {Boolean}    isOnSale            True if still available for sale
 *
 */
router.route('/show/:id').patch(function(req, res){
    var res_body =
        {
            'showId': parseInt(req.params.id),
            'theaterId': 123,
            'sticker': 'path/to/file',
            'image': 'path/to/image',
            'title': 'Disney On Ice',
            'artist': 'Disney crew',
            'date': '01/01/2017',
            'time': '19:00',
            'description': 'Young skaters doing tricks for kids on ice.',
            'isPublished': true,
            'isOnSale': false
        };

    res.status(200).json(res_body);
});

/**
 * @api {post} /show/:id/tickets Add tickets to a show
 * @apiName AddTicketsShow
 * @apiGroup Show
 *
 * @apiDescription Add a list of tickets to an existing show
 *
 * @apiParam (URL parameter) {Integer} :id   ID of the show
 *
 * @apiParam {String}     tickets             List of tickets
 * @apiParam {String}     tickets.ticketId    Unique ticket ID
 * @apiParam {Float}      tickets.price       Title
 *
 * @apiSuccess (Success 201) {Integer}    showId              ID of the show
 * @apiSuccess (Success 201) {Object[]}   tickets             List of tickets for the show
 * @apiSuccess (Success 201) {Integer}    tickets.ticketId    Ticket unique ID
 * @apiSuccess (Success 201) {Float}      tickets.price       Price
 * @apiSuccess (Success 201) {Boolean}    tickets.isReserved  True if the ticket is reserved
 * @apiSuccess (Success 201) {Boolean}    tickets.isSold      True if ticket is sold
 *
 */
router.route('/show/:id/tickets').post(function(req, res){
    var res_body =
        {
            'showId': 1,
            'tickets': [
                {
                    'ticketId': 123456,
                    'price': 19.99,
                    'isReserved': false,
                    'isSold': false
                },
                {
                    'ticketId': 654321,
                    'price': 25.99,
                    'isReserved': false,
                    'isSold': false
                }
            ]
        };

    res.status(201).json(res_body);
});

/**
 * @api {get} /show/:id/tickets Get all tickets of show
 * @apiName GetTicketsShow
 * @apiGroup Show
 *
 * @apiDescription Get the list of every tickets for the show, sold or not sold
 *
 * @apiParam (URL parameter) {Integer} :id   ID of the show
 *
 * @apiSuccess (Success 201) {Integer}    showId              ID of the show
 * @apiSuccess (Success 201) {Object[]}   tickets             List of tickets for the show
 * @apiSuccess (Success 201) {Integer}    tickets.ticketId    Ticket unique ID
 * @apiSuccess (Success 201) {Float}      tickets.price       Price
 * @apiSuccess (Success 201) {Boolean}    tickets.isSold      True if ticket is sold
 *
 */
router.route('/show/:id/tickets').get(function(req, res){
    var res_body =
        {
            'showId': 1,
            'tickets': [
                {
                    'ticketId': 123456,
                    'price': 19.99,
                    'isSold': false
                },
                {
                    'ticketId': 654321,
                    'price': 25.99,
                    'isSold': false
                }
            ]
        };

    res.status(200).json(res_body);
});

/**
 * @api {get} /show/:id/sales Get sales data of a show
 * @apiName SalesShow
 * @apiGroup Show
 *
 * @apiDescription Get the number of tickets sold and the number of tickets remaining for the show
 *
 * @apiParam (URL parameter) {Integer} :id   ID of the show
 *
 * @apiSuccess {Integer}    showId              ID of the show
 * @apiSuccess {Integer}    ticketsSold         Number of tickets sold
 * @apiSuccess {Integer}    ticketsRemaining    Number of tickets remaining
 *
 */
router.route('/show/:id/sales').get(function(req, res){
    var res_body =
        {
            'showId': 1,
            'ticketsSold': 500,
            'ticketsRemaining': 250
        };

    res.status(200).json(res_body);
});

module.exports = router;