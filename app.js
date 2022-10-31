const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/auth/signup", async (req, res) => {
  const User = {
    full_name: req.body.fullName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    city: req.body.city,
    dob: Date.now(),
    point: !req.body.point ? 0 : req.body.point,
  };
  try {
    await db.User.create(User);
    res.status(200).json({
      message: "SUCCESS",
      result: User,
    });
  } catch (error) {
    res.status(500).json({
      message: "FAILED",
      result: error,
    });
  }
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => console.log("serven on at http://localhost:3000"));
  })
  .catch((error) => console.log(error));
