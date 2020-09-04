// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require("./routes");
const cors = require("cors");

// define PORT
const PORT = process.env.PORT || 3001;

// configure dotenv
require('dotenv').config();
const corsConfig = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200
}

// new express app
const app = express();

// define middleware
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configure api routes
app.use(routes)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));
}

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI
    // || "mongodb://localhost/freshperspective",
    // { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Start the API server
app.listen(PORT, function () {
    console.log(`server running on port http://localhost: ${PORT}!`);
});