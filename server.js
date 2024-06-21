const express = require('express');
const dbConnection = require('./Database/index');
const {PORT} = require('./Config/index');
const router = require('./Routes/index');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

app.use(router);

dbConnection();

app.listen(PORT, console.log(`App is running on port: ${PORT}`));
