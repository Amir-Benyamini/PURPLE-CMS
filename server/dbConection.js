const mongoose = require("mongoose");

const connectDB = function () {
  const conn = mongoose.connect("mongodb://localhost/purple", {
    useNewUrlParser: true,
  });
  console.log("DB is connected");
  // conn.connection.db.dropDatabase();
};
exports.connectDB = connectDB;
