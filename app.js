const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const router = require("./routes");

const corsOptions = {
	origin: "https://gamenation.my.id",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(router);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
    app.listen(5000, () => console.log("serven on at http://localhost:5000"));
  })
  .catch((error) => console.log(error));
