const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./userRouts");
const DB = require("./dbConection");
const cors = require("cors");
const port = 4000;

DB.connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
