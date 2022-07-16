const express = require("express");
require("dotenv").config();
const app = express();
const databaseConnection = require("./database/db");

//================================
//================================
const storeApiDataRouter=require('./routes/apiiDataRouter')
const countriesRouter=require('./routes/countries')
//================================
app.use("/api-data",storeApiDataRouter)
app.use("/countries",countriesRouter)

//================================
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
