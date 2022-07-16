const { default: axios } = require("axios");

//function to fetch api data
const getApiData = async (url) => {
  try {
    const { data } = await axios
      .get(url);
    return data;
  } catch ({ message }) {
    console.log(message);
  }
};

module.exports = getApiData;
