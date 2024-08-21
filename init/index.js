const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../Models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66b3a544e8f37360510aa785",
  }));
  await listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
