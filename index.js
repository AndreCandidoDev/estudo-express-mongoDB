// config inicial
const express = require('express')
const bodyParser = require("body-parser");
const app = express()

// depois do db
const mongoose = require('mongoose')


const routes = require('./routes/routes');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api', routes)


mongoose
  .connect(
    'mongodb+srv://<user>:<password>@cluster0.z143mes.mongodb.net/test',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))