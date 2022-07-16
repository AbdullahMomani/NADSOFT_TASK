const countriesModel = require("../database/models/countries");

//searching in countries based on query search; if no query found will get all countries
const searchCountries = (req, res) => {
  const query = req.query.search;
  const querySearch = { $regex: `^${req.query.search}`, $options: "$i" };
  const searchKeys = query
    ? {
        $or: [
          { ccn3: querySearch },
          { cca2: querySearch },
          { cca3: querySearch },
          {
            $or: [
              { "name.common": querySearch },
              { "name.official": querySearch },
            ],
          },
        ],
      }
    : {};

  countriesModel
    .find(searchKeys)
    .then((result) => {
      if (!result.length) {
        return res.status(404).json({
          success: true,
          message: `the country ${query} not found `,
        });
      }

      res.status(200).json({
        success: true,
        message: `successful search for ${query} `,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
      });
    });
};

//function to get country currencies based on cca2 with ignore case sensitive
const getCountryCurrencies = (req, res) => {
  const params = req.params.cca2;

  countriesModel
    .findOne({ cca2: { $regex: `^${params}`, $options: "$i" } })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: true,
          massage: `the country currencie not found `,
        });
      }
      res.status(200).json({
        success: true,
        massage: ` ${result.name.common} currencies`,
        result: result.currencies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: `server error`,
      });
      console.log(err);
    });
};

//function to get the contries based on region or languages , condition pass by params
const getCountriesGroupBy = async (req, res) => {
  const params = req.params.group;
  countriesModel
    .aggregate([
      {
        $group: {
          _id: `$${params}`,
          Countries: { $push: { countryName: "$name" } },
        },
      },
    ])

    .then((countries) => {
      res.status(200).json({
        success: true,
        message: `All Countries By ${params}`,
        countries: countries,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

module.exports = { searchCountries, getCountryCurrencies, getCountriesGroupBy };
