const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

// TODO: Get this value from configuration (eg environment variable or hidden config file)
// As long as the actual value of this in production is protected, your login system is secure.
const SECRET = "thisIsNotAGoodSecret,ChangeMePlease"; 

// This function signs a token for the user, 
// which can be used to prove they logged in through our server.
function makeToken(user) {
	const token = jwt.sign(
		// Data contained in token
		{ id: user.id, username: user.username },
		SECRET,
		{ expiresIn: 60 * 60 } // 1 hour
	);
	return token;
}

// I reordered the routes.

// This route processes a login request.
router.post("/login", async function(req, res) {
	// request must contain username/password.
	const { username, password } = req.body;
	// if either is not provided, reject the request as unsuccessful.
	if (!username || !password) { 
		res.json({ 
			success: false,
			message: "Need to provide username and password" 
		});
		return;
	}
	
	// Find a user in the database with their username
	const check = await db.User.findOne( { username } );
	if (!check) { // if one does not exist, reject as unsuccessful.
		res.json({ 
			success: false,
			message: "Bad username or password" 
		});
		return;
	}
	// If user exists, but password does not match, also reject.
	// argon2 is what signs the password for us.
	if (!await argon2.verify(check.hash, password)) {
		res.json({ 
			success: false,
			message: "Bad username or password" 
		});
		return;
	}
	
	// If we get here, then the user exists and the password matches the one in the db.
	// Sign the user a token,
	const token = makeToken(check);
	
	// and send it back to them, along with a successful status.
	res.json({ success: true, token });
});

// This route makes a new user.
// You can use this, but it was intended for a sign-up.
router.post("/newUser", async function(req,res){
	// request must contain username/password.
	const { username, password } = req.body;
	// if either is not provided, reject the request as unsuccessful.
	if (!username || !password) {
		res.json ({
			success:false,
			message: "Need to provide username and password"
		});
		return;
	}
	
	// find a user in the database.
	const check = await db.User.findOne( { username } );
	if (check) { // This time, if a user already exists with that name, reject as unsuccessful. 
		res.json ({
			success: false,
			message: "Please provide a unique username, this user already exists"
		});
		return;
	}
	
	// Otherwise (none exists yet), create them.
	// Have argon hash the password for us
	const hash = await argon2.hash(password)
	// Create the user as requested. 
	const user = await db.User.create({ username, hash, role: "User" })
	
	// Since this was intended as a sign-up feature, signing up is considered a login.
	// so it signs a token,
	const token = makeToken(user);
	// and sends back the token with the successful response.
	res.json({ success: true, token })
})

// This route will change a user's password.
router.post("/changePassword", async function(req, res) {
	// This requires 4 things:
	const { oldPassword, // User's current password
			newPassword, // User's desired new password
			confirmPassword, // Repeat of the User's desired new password
			token // The user's login token
	} = req.body;
	
	// If any are not provided, reject the request as unsuccessful.
	if (!oldPassword || !newPassword || !confirmPassword || !token) {
		res.json({
			success: false,
			message: "Missing information"
		});
		return;
	}
	
	// Verify and unpack the token.
	let id = null;
	let username = null;
	try { // If the token cannot be verified, jwt will throw an error at us.
		const unpacked = jwt.verify(token, SECRET);
		// If it worked, update id/username
		id = unpacked.id;
		username = unpacked.username;
	} catch (err) { 
		console.error(`Failed to verify a token for a password change.`, err);
		// If not (probably due to the login expiring), reject the request as unsuccessful.
		res.json({
			success: false,
			message: "Failed to unpack token. Your session may have expired.",
			err,
		});
		return;
	}
	
	// Find the User's entry in the database.
	const check = await db.User.findOne( { _id: id } );
	if (!check) {
		// If the user does not exist (say, they were deleted while still logged in)
		// then reject the request as unsuccessful.
		res.json({
			success: false,
			message: "User no longer exists"
		});
		return;
	}
	
	// Hash the provided password, and make sure their current password matches,
	const hash = check.hash;
	if (!await argon2.verify(hash, oldPassword)) {
		// If it does not match their current password, reject as unsuccessful.
		res.json({
			success: false,
			message: "Old password does not match current password"
		});
		return;
	}
	
	// Next, check the provided passwords match
	if (newPassword !== confirmPassword) {
		// If not, reject as unsuccessful
		res.json({
			success: false,
			message: "new passwords do not match"
		});
		return;
	}
	
	// Finally, hash the new password, and update the user's record.
	check.hash = await argon2.hash(newPassword);
	
	// wrap the save() in a try{}catch{}, 
	// just in case some database error occurs.
	try {
		await check.save();
		console.log(`Changed ${username}'s password.`);
	} catch (err) {
		console.error(`Database error when saving user ${username}`, err);
		// If something does go wrong, let the user know.
		res.json({
			success: false,
			message: "database error",
			err
		});
		return;
	}
	
	// If everything worked, let the user know their password has changed.
	res.json({ success: true });
	
});




module.exports = router;
