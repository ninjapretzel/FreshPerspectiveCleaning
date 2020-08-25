// require dependencies
const express = require('express');
// const routes = require("./routes")
// const mongoose = require('mongoose');
// const path = require('path');

// configure dotenv
require('dotenv').config();

// new express app
const app = express();

// configure api routes
// app.use(routes)

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/dbName"
//   );

// define PORT
var PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});