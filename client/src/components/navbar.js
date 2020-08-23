import React, { Component } from "react"
import M from "materialize-css"

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">Routine Clean</a></li>
                    <li><a href="#!">Deep Clean</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><a href="#!">Routine Clean</a></li>
                    <li><a href="#!">Deep Clean</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper container">
                        <a href="" className="brand-logo">Fresh Perspective</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-trigger" href="" data-target="dropdown1">Cleaning Checklist<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a className="dropdown-trigger" href="" data-target="dropdown2">Estimates<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="">Booking</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar