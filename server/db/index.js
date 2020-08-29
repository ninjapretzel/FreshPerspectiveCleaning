const mongoose = require("mongoose");
const argon2 = require("argon2");

mongoose.connect(`mongodb://localhost:27017/expressReactLogin`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const UserSchema = require("./user");
const User = mongoose.model("User", UserSchema);

// Little function to make admin account the first time the server starts up.
async function ensureAdminExists() {
	// See if one exists,
	const check = await User.findOne( { username: "admin" } )
	// And if not, create it.
	if (!check) { // No admin user? Create a default one.
		// Use argon2 to hash the default password.
		const hash = await argon2.hash("changeMe");// default admin password should be a hint.
		// Store the username/hash/role in the database.
		await User.create({ username: "admin", hash, role: "Admin" });
	}
} ensureAdminExists(); // And fire this function immediately when loading this file.

module.exports = {
	User,
	mongoose
};
