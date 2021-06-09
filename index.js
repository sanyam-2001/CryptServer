const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

  next();
});

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use(routes);

mongoose.connect(
  'mongodb+srv://chatteltech19:chattel19@cluster0-icted.mongodb.net/algo?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(process.env.PORT || 5000, function () {
  console.log('Server is running on port 5000.');
});
