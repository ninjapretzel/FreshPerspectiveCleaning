import React from "react"
import ChangePasswordControl from "../components/ChangePasswordControl"
import LoggedInControlClass from "../components/LoggedInClass"
import LogoutButton from "../components/LogoutButton"

class EmployeeControls extends React.Component {
	render() {
		return <div className ="container app-content">
			<div className = "row card">
				<h5 className="center">Employee Controls</h5>
				<ChangePasswordControl />
				<LoggedInControlClass />
				<LogoutButton />
			</div>
		</div>
	}
}

export default EmployeeControls;