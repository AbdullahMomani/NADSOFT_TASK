const mongoose = require("mongoose");

const countriesSchema = new mongoose.Schema({
  name: { type: Object },
  languages: { type: Object },
  cca2: { type: String },
  cca3: { type: String },
  ccn3: { type: String },
  currencies: { type: Object },
  region: { type: String },
  latlng: { type: Array },
});

module.exports = mongoose.model("Countries", countriesSchema);
