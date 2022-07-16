const express = require("express");
const storeApiData = require("../controllers/store_api_data");

// define storeApiData router
const storeApiDataRouter = express.Router();

// url : http://localhost:5000/api-data/

storeApiDataRouter.post("/", storeApiData);

module.exports = storeApiDataRouter;
