
const express = require("express");
const {
    searchCountries,
    getCountryCurrencies,
    getCountriesGroupBy
} = require("../controllers/countries");

const countriesRouter = express.Router();


// 			routes
//get -       http://localhost:5000/country 
//get -       http://localhost:5000/country?search=JOR 
//get -       http://localhost:5000/country/currencies/400   
//get -       http://localhost:5000/country/region 


countriesRouter.get("/", searchCountries);
countriesRouter.get("/currencies/:cca2", getCountryCurrencies);
countriesRouter.get("/filter/:group", getCountriesGroupBy);

module.exports = countriesRouter;
