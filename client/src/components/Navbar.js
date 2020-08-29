// dependencies
import React, { Component } from "react"
import { NavLink } from "react-router-dom"

// css
import logo from "../images/cleaningLogo.png"
// import "../css/Navbar.css"
import M from "materialize-css"

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div>
                <nav >
                    <div className="nav-wrapper container">
                        <a href="" className="brand-logo"><img id="logo" src={ logo } alt="cleaning-logo"></img><span id="logoName">Fresh Perspective</span></a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/checklist">CleaningChecklist</NavLink></li>
                            <li><NavLink to="/booking">Booking</NavLink></li>
                            <li><NavLink to="/employee">EmployeePortal</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/checklist">CleaningChecklist</NavLink></li>
                    <li><NavLink to="/booking">Booking</NavLink></li>
                    <li><NavLink to="/employee">EmployeePortal</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
