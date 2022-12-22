const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const router = require("./routes");
const path = require("path");

const corsOptions = {
  origin: process.env.CORS_API || "http://localhost:3000",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/binar-challenge-chapter-10-backEnd", "public")));
app.use(cors(corsOptions));
app.use(router);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
    app.listen(process.env.PORT || 5000, () => console.log("serven on at http://localhost:5000"));
  })
  .catch((error) => console.log(error));
