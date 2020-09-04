const router = require("express").Router();
const db = require("../models")

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
	// TODO: Save a password in the employee record, and check the provided password.
    //            fail the login if the provided password does not match the record.
    
    // TODO: Don't send back the entire employee record, just send back the username and employee ID
	res.json({ success : true, employee })

});



module.exports = router