import React from "react"
import ChangePasswordControl from "../components/ChangePasswordControl"
import NewUserForm from "../components/NewUserForm"
import LogoutButton from "../components/LogoutButton"

class AdminControls extends React.Component {
	render() {
		return <div className ="container app-content">
			<div className = "row card">
				<h5 className="center">Admin Controls</h5>
				<ChangePasswordControl />
				<NewUserForm />
				<LogoutButton />
			</div>
			


		</div>
	}
}

export default AdminControls;