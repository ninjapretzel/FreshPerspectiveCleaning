const router = require("express").Router();
const db = require("../models")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken")

// Provided via Heroku console
// If it does get leaked, it can be changed-
// the only problem will be any existing logins are invalidated.

const SECRET = process.env.JWT_SECRET || "DefaultSecretIsNotAGoodSecret"
const EXPIRY = process.env.JWT_EXPIRY || (60 * 60) // default is 1 hour (60 sec* 60 min )

function signToken(employee) {
	let token = { id: employee.id, username: employee.username };

	return jwt.sign(token, SECRET, { expiresIn: EXPIRY})
}

router.post("/", async (req, res ) => {
	const { username, password } = req.body;

	if (!username || !password){
		res.json({ success: false, message: "Please provide username and password."});
		return;
	}

	const employee = await db.Employee.findOne({ username })
	if (!employee) {
		res.json({ success: false, message: "Bad username or password"} );
		return;
	}
	// securely verify password matches hash in database 
	if (!await argon2.verify(employee.hash, password)) {
		res.json({ success: false, message: "Bad username or password"} );
		return;
	}
	// Sign token, so that when we receive it again,
	// We know it originated from our server
	// whenever the logged in user wants to ask for our server to do something,
	// they must provide that token with the request.
    const token = signToken(employee)
	res.json({ success : true, token, role: employee.role })

});



module.exports = router