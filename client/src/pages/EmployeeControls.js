import React from "react"
import ChangePasswordControl from "../components/ChangePasswordControl"
import LoggedInControlExample from "../components/LoggedInControlExample"

class EmployeeControls extends React.Component {
	render() {
		return <div className ="row container app-content">
			<h3>Employee Controls</h3>
			<ChangePasswordControl />
			<LoggedInControlExample />
		</div>
	}
}

export default EmployeeControls;