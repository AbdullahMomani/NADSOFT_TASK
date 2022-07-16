const express = require("express");
const {
  searchCountries,
  getCountryCurrencies,
  getCountriesGroupBy,
} = require("../controllers/countries");

const countriesRouter = express.Router();

countriesRouter.get("/", searchCountries);
countriesRouter.get("/currencies/:cca2", getCountryCurrencies);
countriesRouter.get("/filter/:group", getCountriesGroupBy);

/*
method: get 
url:
http://localhost:5000/countries              //all countries
http://localhost:5000/countries?search=GUY   //based on cca3
http://localhost:5000/countries?search=ck    //based on cca2
http://localhost:5000/countries?search=184   //based on ccn3
http://localhost:5000/countries?search=Cook Islands   //based on common name
http://localhost:5000/countries?search=Republic of Turkey  //based on official name
http://localhost:5000/countries/currencies/tr    //search currencies based on cca2
http://localhost:5000/countries/filter/region    // group countries by region
http://localhost:5000/countries/filter/languages  //group countries be languages
*/

module.exports = countriesRouter;
