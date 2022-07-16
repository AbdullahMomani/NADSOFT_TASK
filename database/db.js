const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NADSOFT").then(
  () => {
    console.log("DB READY TO USE ..");
  },
  (err) => {
    throw err;
  }
);
