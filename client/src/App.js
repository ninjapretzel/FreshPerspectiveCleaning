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
import Booking from "./pages/Booking"
import NotFound from "./pages/NotFound"
import EmployeePortal from "./pages/EmployeePortal"

// styling css
import 'materialize-css/dist/css/materialize.min.css'
import "./css/Navbar.css"
import "./css/Footer.css"
import './css/App.css';
import EmployeeControls from './pages/EmployeeControls'
import AdminControls from './pages/AdminControls'

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="container app-content"> */}
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/checklist" component={ Checklist } />
          <Route exact path="/booking" component={ Booking } />
          <Route exact path="/login" component={ EmployeePortal } />
          <Route exact path="/employee" component={ EmployeeControls } />
          <Route exact path="/admin" component={ AdminControls } />
          <Route path="*" component={ NotFound } />
        </Switch>
      {/* </div> */}
      <Footer />
    </Router>
  );
}

export default App;
