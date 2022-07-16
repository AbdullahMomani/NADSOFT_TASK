const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express();
const databaseConnection = require("./database/db");
app.use(cors());
//================================
const storeApiDataRouter = require("./routes/apiDataRouter");
const countriesRouter = require("./routes/countries");
const filesRouter = require("./routes/countries_json_file");
//================================
app.use("/api-data", storeApiDataRouter);
app.use("/countries", countriesRouter);
app.use("/files", filesRouter);
//================================
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
