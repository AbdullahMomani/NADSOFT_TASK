const express = require("express");
const {
  saveJsonFile,
  downloadJsonFile,
} = require("../controllers/countries_json_file");
const authorization = require("../middlewares/authorization");

const filesRouter = express.Router();

filesRouter.get("/write", saveJsonFile); //ROUTE to save api-data in json-file
// filesRouter.get("/write", saveJsonFile); we can use post method here
filesRouter.get("/download", authorization, downloadJsonFile); //route to download json-file for admin

/*
method:get
url:
http://localhost:5000/files/write
http://localhost:5000/files/download
 */

module.exports = filesRouter;
