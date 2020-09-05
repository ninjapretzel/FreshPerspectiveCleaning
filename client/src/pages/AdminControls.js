import React from "react"
import ChangePasswordControl from "../components/ChangePasswordControl"
import LoggedInControlExample from "../components/LoggedInControlExample"

class AdminControls extends React.Component {
	render() {
		return <div className ="row container app-content">
			<h3>Admin Controls</h3>
			<ChangePasswordControl />
			<LoggedInControlExample />


		</div>
	}
}

export default AdminControls;