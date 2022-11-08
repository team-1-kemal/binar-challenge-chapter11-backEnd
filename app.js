const express = require('express');

const app = express();
const db = require('./models');
const cors = require('cors');
const router = require('./routes');

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(router);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('database connected');
    app.listen(process.env.PORT, () =>
      console.log('serven on at http://localhost:3000')
    );
  })
  .catch((error) => console.log(error));
