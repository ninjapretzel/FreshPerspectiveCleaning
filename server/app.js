const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const corsConfig = {
	// FORGOT TO MENTION THIS: THIS IS NECESSARY FOR HAVING A SEPARATE FRONTEND AND BACKEND HOST
	// By default (thankfully, a secure default), any requests that come to your server,
	// but _are not from the same hostname_ are blocked. 
	// In order to unblock them, we must provide configuration.
	// In this case, we want to allow requests that are from the React front end.
	// (This is called Cross-Origin-Resource-Sharing, or CORS)
	// (problems caused by the default CORS rejections are SUPER COMMON when developing,
	// but, if it was not this way, web applications would be SUPER INSECURE)
	origin: 'http://localhost:3000', // also, this should come from a config file!
}

// App creation and configuration:
const app = express();
app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Attach login router
const login = require("./routes/login");
app.use(login);

// Listen on different port than front-end
const port = 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
