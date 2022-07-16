const express = require("express");
const storeApiData = require("../controllers/store_api_data");

// define storeApiData router
const storeApiDataRouter = express.Router();

storeApiDataRouter.get("/", storeApiData);
/* storeApiDataRouter.post("/", storeApiData); also we can use post method , 
but here i used get to make ability to test from browser*/

/* to store the api data in the data base 
run the follownig url in your browser
http://localhost:5000/api-data/
*/

module.exports = storeApiDataRouter;
