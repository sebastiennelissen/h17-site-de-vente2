define({ "api": [
  {
    "type": "post",
    "url": "/show/:id/tickets",
    "title": "Add tickets to a show",
    "name": "AddTicketsShow",
    "group": "Show",
    "description": "<p>Add a list of tickets to an existing show</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>ID of the show</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tickets",
            "description": "<p>List of tickets</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tickets.ticketId",
            "description": "<p>Unique ticket ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "tickets.price",
            "description": "<p>Title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 201",
            "type": "Object[]",
            "optional": false,
            "field": "tickets",
            "description": "<p>List of tickets for the show</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "tickets.ticketId",
            "description": "<p>Ticket unique ID</p>"
          },
          {
            "group": "Success 201",
            "type": "Float",
            "optional": false,
            "field": "tickets.price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.isReserved",
            "description": "<p>True if the ticket is reserved</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.isSold",
            "description": "<p>True if ticket is sold</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "post",
    "url": "/show",
    "title": "Create a show",
    "name": "CreateShow",
    "group": "Show",
    "description": "<p>Add a new show</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 201",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "delete",
    "url": "/show/:id",
    "title": "Delete a show",
    "name": "DeleteShow",
    "group": "Show",
    "description": "<p>Deletes a show and all of its tickets</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Show unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "get",
    "url": "/show/:id",
    "title": "Get data of a show",
    "name": "GetShow",
    "group": "Show",
    "description": "<p>Get every attributes of a show.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Show unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "get",
    "url": "/show/:id/tickets",
    "title": "Get all tickets of show",
    "name": "GetTicketsShow",
    "group": "Show",
    "description": "<p>Get the list of every tickets for the show, sold or not sold</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>ID of the show</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 201",
            "type": "Object[]",
            "optional": false,
            "field": "tickets",
            "description": "<p>List of tickets for the show</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "tickets.ticketId",
            "description": "<p>Ticket unique ID</p>"
          },
          {
            "group": "Success 201",
            "type": "Float",
            "optional": false,
            "field": "tickets.price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.isSold",
            "description": "<p>True if ticket is sold</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "get",
    "url": "/show/:id/sales",
    "title": "Get sales data of a show",
    "name": "SalesShow",
    "group": "Show",
    "description": "<p>Get the number of tickets sold and the number of tickets remaining for the show</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>ID of the show</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ticketsSold",
            "description": "<p>Number of tickets sold</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ticketsRemaining",
            "description": "<p>Number of tickets remaining</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "put",
    "url": "/show/:id",
    "title": "Update all data of a show",
    "name": "UpdateAllShow",
    "group": "Show",
    "description": "<p>Update every field of a show. All attributes must be included in the request.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>ID of the show</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "patch",
    "url": "/show/:id",
    "title": "Update a show",
    "name": "UpdateShow",
    "group": "Show",
    "description": "<p>Update only one or few fields of the show. Can be used to change the visibility of a show or end a sale.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>ID of the show</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": true,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "showId",
            "description": "<p>ID of the show</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sticker",
            "description": "<p>Path to the sticker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Path to the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist participating in show</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short text describing show</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isPublished",
            "description": "<p>True is show is visible</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isOnSale",
            "description": "<p>True if still available for sale</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/show-api.js",
    "groupTitle": "Show"
  },
  {
    "type": "post",
    "url": "/theater",
    "title": "Create a theater",
    "name": "CreateTheater",
    "group": "Theater",
    "description": "<p>Create a new theater</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>Theater unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>Administrator ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity of theater</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>ID of the administrator</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Street number and street name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  },
  {
    "type": "delete",
    "url": "/theater/:id",
    "title": "Delete a theater",
    "name": "DeleteTheater",
    "group": "Theater",
    "description": "<p>Delete a theater. Not possible if there are show scheduled in the theater.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Theater unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  },
  {
    "type": "get",
    "url": "/theater/:id",
    "title": "Get data of a theater",
    "name": "GetTheater",
    "group": "Theater",
    "description": "<p>Get all attributes of a theater</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Theater unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>ID of the administrator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Street number and street name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  },
  {
    "type": "put",
    "url": "/theater/:id",
    "title": "Update all data of a theater",
    "name": "UpdateAllTheater",
    "group": "Theater",
    "description": "<p>Update every attributes of a theater. All attributes must be included in the request.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Theater unique ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>Theater unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>Administrator ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity of theater</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>ID of the administrator</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Street number and street name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  },
  {
    "type": "patch",
    "url": "/theater/:id",
    "title": "Update a theater",
    "name": "UpdateTheater",
    "group": "Theater",
    "description": "<p>Update one or few attributes of a theater.</p>",
    "parameter": {
      "fields": {
        "URL parameter": [
          {
            "group": "URL parameter",
            "type": "Integer",
            "optional": false,
            "field": ":id",
            "description": "<p>Theater unique ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "theaterId",
            "description": "<p>Theater unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adminId",
            "description": "<p>Administrator ID of the theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of theater</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "capacity",
            "description": "<p>Capacity of theater</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "theaterId",
            "description": "<p>ID of the theater</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "adminId",
            "description": "<p>ID of the administrator</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Street number and street name</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>Province</p>"
          },
          {
            "group": "Success 201",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  }
] });
