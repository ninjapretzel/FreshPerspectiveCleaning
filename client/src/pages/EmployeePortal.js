import React from "react"
import axios from "axios"
import { Redirect } from "react-router-dom";
import M from "materialize-css";

const BACKEND_HOST = "http://localhost:3001";

class EmployeePortal extends React.Component {
    state = {
        username: "",
        password: "",
    }
    
    onSubmit = async (event) => {
        event.preventDefault();
		
		const { username, password } = this.state;
		const result = await axios.post(BACKEND_HOST+ "/login", { username, password })

		const { success, employee, message } = result.data;

		if (success) {
			this.props.history.push("/");
		} else {
			M.toast( {html: message, classes: "red"} );
		}
    }
    
    captureInput = (event) => {
        const payload = {}
		payload[event.target.id] = event.target.value;
		this.setState(payload);
    }
    
    render() {
        // console.log("In Render:", this.state);
        return (
            <div className="container app-content row">
                <h3>Employee Portal: employee login page</h3>
                <div className="input-field col s12">
                    <input id="username" onChange={this.captureInput} type="email" />
                    <label for="username">Username</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" onChange={this.captureInput} type="password" />
                    <label for="password">Password</label>
                </div>
                
                <a className="btn" href="" onClick={this.onSubmit}>Login</a>
            </div>
        )
    }
}

export default EmployeePortal