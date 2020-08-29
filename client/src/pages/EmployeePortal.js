import React from "react"
import Global from "../Global"
import axios from "axios"

// Modified by ninjapretzel
// TODO: Grab this from configuration!
const BACKEND_HOST = "http://localhost:3001";

// Class components are able to do much more than function components are.
// see https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108#dd07 for more information.
// # Functional vs Class-Components in React
// ## (Differences between functional and class-Components)

class EmployeePortal extends React.Component {
	// One of the other features of react, can be wired in automatically by react.
	// If we assign a `static contextType` to point to a context type (like Global)
	// react will automatically look "up the tree" for a matching context Provider
	// in this case, it will be found inside of the `App`- the `<Global.Provider>` that everything is inside of inside of App.
	static contextType = Global;
	
	// this is typically where one would set up their component's state.
	// Every class-component automatically has a capture like
	// let [ state, setState ] = useState({});
	// and then those captured variables are placed into the object:
	// this.state = state;
	// this.setState = setState;
	constructor() {
		super();
		// State is the things we are going to remember.
		// In this case, it is information entered into the form by the user.
		// if you were using a functional component, this would be a little uglier:
		// let [ username, setUsername ] = useState("");
		// let [ password, setPassword ] = useState("");
		// let [ message, setMessage ] = useState("");
		// And this would also complicate the `captureInput` method down below.
		this.state = {
			username: "",
			password: "",
			message: ""
		}
	}
	// This is a function that we bind to the Input elements of the form, to their `onChange`.
	// this gets called any time a key is typed within that element.
	captureInput = (event) => {
		// Read the id and value of what was changed
		const {id, value} = event.target;
		
		// Create an object
		const payload = {};
		// Set the field named by the 'id' (eg, username for the element like <input id="username">)
		// to the value in the input field
		payload[id] = value;
		
		// Update the component's state with that new information (which will re-render the component)
		this.setState(payload);
	}
	
	// Function for logic to talk with the server.
	doLogin = async () => {
		// Unpack the username/password in the form
		const { username, password } = this.state;
		
		// Send them to the backend's "/login" route
		// and wait for the results.
		const result = await axios.post(BACKEND_HOST + "/login", {
			username, password
		})
		
		// Unpack the result
		const { success, token, message } = result.data;
		
		if (success) {
			// If we were successful, call the global context's `onLogin` function.
			this.context.onLogin({ username, token });
		} else {
			// If it failed, set the message to show up underneath the login form in red.
			this.setState({ message });
		}
	}
	
	render() {
		// check if we're logged in.
		// this data comes from the context.
		// if either is provided, consider ourselves logged in.
		return (this.context.username || this.context.token) ? (
			// If logged in, show them their options
			// I would also suggest moving this stuff out into another, separate component file.
			// and even potentially making a separate file for every control you may want to give an employee
			//		eg, make one component for allowing an employee to set their available times, 
			//		and another to show their next job (if available)
			<div>
				<h2>You are logged in as {this.context.username}</h2>
				<a href="#" onClick={this.context.logout} >Logout!</a>
			</div>
		) : (
			// Otherwise, if they are not logged in, show them a login page.
			
			<div className="row container"> 
				<h1>Employee Portal: employee login</h1>
				
				{ /* general structure is taken from Materialize's input examples https://materializecss.com/text-inputs.html */ }
				{/* The wired 'onChange' is reusable for every input. */}
				<div className="input-field col s12">
					<input onChange={this.captureInput} id="username" type="text" className="validate" />
					<label for="username">Username</label>
				</div>
				
				<div className="input-field col s12">
					<input onChange={this.captureInput} id="password" type="password" className="validate" />
					<label for="password">Password</label>
				</div>
				
				{/* Button for doing the login routine */}
				<a onClick={this.doLogin} id="loginButton" className="green darken-2 waves-effect waves-light btn">login</a>
				
				{/* Display area for the error message */}
				<div className="red-text">{this.state.message}</div>
			</div>
		)
	}
}

export default EmployeePortal
