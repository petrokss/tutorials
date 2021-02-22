const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models')

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to petroks application.')
});

const PORT = process.env.PORT || 8080;
Promise.resolve()
  .then(() => db.sequelize.sync()) // add {forse: true} for force sync of all database models
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  });