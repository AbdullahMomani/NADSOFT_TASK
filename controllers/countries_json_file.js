const fs = require("fs");
const getApiData = require("./api_data"); // import the getApiData function

//this function to save the api-data into json file => countries.json
const saveJsonFile = async (req, res) => {
  const url = "https://restcountries.com/v3.1/all"; // also we can send the url in body of request to be more generic
  const data = await getApiData(url);

  try {
    fs.writeFile("countries.json", JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
    res.status(200).json({
      success: true,
      massage: `written the file successfully `,
    });
  } catch (error) {
    console.log(error);
  }
};

//this function to download json-file to admin
const downloadJsonFile = (req, res) => {
  res.download("countries.json", (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = { saveJsonFile, downloadJsonFile };
