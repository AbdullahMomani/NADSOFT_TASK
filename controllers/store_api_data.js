const countriesModel = require("../database/models/countries");
const getApiData = require("./api_data");

//function to store the data fetched from api to database
const storeApiData = async (req, res) => {
  const url = "https://restcountries.com/v3.1/all"; // also we can send the url in body of request to be more generic
  const data = await getApiData(url);
  try {
    data.forEach((data) => {
      const { name, languages, cca2, cca3, ccn3, currencies, region, latlng } =
        data;
      const countries = new countriesModel({
        name,
        languages,
        cca2,
        cca3,
        ccn3,
        currencies,
        region,
        latlng,
      });

      countries.save();
    });
    res.status(200).json({
      success: true,
      message: "data saved on database successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

module.exports = storeApiData;
