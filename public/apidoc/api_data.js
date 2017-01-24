define({ "api": [
  {
    "type": "delete",
    "url": "/theater/:id",
    "title": "Delete a theater",
    "name": "DeleteTheater",
    "group": "Theater",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
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
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"theaterId\": 1\n  \"adminId\": 980198,\n  \"name\": \"Metropolis\",\n  \"address\": \"1000 rue Ste-Catherine\".\n  \"city\": \"Montreal\",\n  \"province\": \"Quebec\",\n  \"capacity\": 750\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TheaterNotFound",
            "description": "<p>The theater with the given ID was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"TheaterNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  },
  {
    "type": "get",
    "url": "/theater/:id",
    "title": "Request data of a theater",
    "name": "GetTheater",
    "group": "Theater",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
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
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "capacity",
            "description": "<p>Capacity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"theaterId\": 1\n  \"adminId\": 980198,\n  \"name\": \"Metropolis\",\n  \"address\": \"1000 rue Ste-Catherine\".\n  \"city\": \"Montreal\",\n  \"province\": \"Quebec\",\n  \"capacity\": 750\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TheaterNotFound",
            "description": "<p>The theater with the given ID was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"TheaterNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/theater-api.js",
    "groupTitle": "Theater"
  }
] });
