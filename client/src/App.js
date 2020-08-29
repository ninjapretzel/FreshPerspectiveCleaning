// dependencies
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// components need to change case in nav and footer

import Navbar from "./components/Navbar"

import Footer from "./components/Footer"

// page components
import Home from "./pages/Home"
import Checklist from "./pages/Checklist"
import Estimate from "./pages/Booking"
import Booking from "./pages/Booking"
import NotFound from "./pages/NotFound"
import EmployeePortal from "./pages/EmployeePortal"

// styling css
import 'materialize-css/dist/css/materialize.min.css'
import "./css/Navbar.css"
import "./css/Footer.css"
import './css/App.css';
import Global from './Global'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      token: null,
      onLogin: (creds) => {
        localStorage["userLogin"] = JSON.stringify(creds);
        this.setState(creds);
        window.location = "/"
      },
      logout: () => {
        localStorage["userLogin"] = "";
        this.setState({ username: null, token: null });
        window.location = "/"
      }
    }
  }
  
  async componentDidMount() {
		if (localStorage["userLogin"]) {
			const userLogin = JSON.parse(localStorage["userLogin"]);
			const {username, token} = userLogin;
			
			// TODO: Verify token is still valid
			this.setState({username, token});
			
		}
	}

  render() {
    return (
      <Global.Provider value={this.state}>
        <Router>
          <Navbar />
          <div className="container app-content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/checklist" component={ Checklist } />
              <Route exact path="/estimate" component={ Estimate } />
              <Route exact path="/booking" component={ Booking } />
              <Route exact path="/employee" component={ EmployeePortal } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Global.Provider>
    );
  }
}

export default App;
