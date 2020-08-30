import React, { Component } from "react"
import { Input } from "../components/Forms/Input.js"
import { Col } from "../components/Forms/Col-s12-l6"
import { FormHeader } from "../components/Forms/FormHeader"
import M, { Datepicker } from "materialize-css"

// simon start
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
// simon end


// const blockedDate = [
//     new Date("2020-08/30"),
//     new Date("2020-09/04"),
//     new Date("2020-09/05"),
//     new Date("2020-09/06")
// ];

class Booking extends Component {

    state = { 
        showCalenda: false,
        selectedDate: "",
        startDate: new Date(),
        blockedDate: [
            new Date("2020-08/30"),
            new Date("2020-09/04"),
            new Date("2020-09/05"),
            new Date("2020-09/07"),
            new Date("2020-09/23"),
            new Date("2020-09/24"),
            new Date("2020-09/21"),
            new Date("2020-09/22"),
            new Date("2020-09/25")
        ]
    }

    handleDateInputClick = () => {
        this.setState({showCalenda: true})
    }
    handleDateChange = (date) => {
        this.setState({ 
            startDate: date,
            selectedDate: date,
            showCalenda: false,
        });
    };

    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6 ;
      };

    componentDidMount() {
        M.AutoInit()
    }


    render() {
        return (
            <div>
                <div className="row inputs">
                    <div className="card col l8 s12">
                        <FormHeader>1. ENTER YOUR PROPERTY INFO</FormHeader>
                        <Col>
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6+</option>
                            </select>
                            <label>How many bedrooms do you have?</label>
                        </Col>
                        <Col>
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                                <option value="3.5">3.5</option>
                                <option value="4">4</option>
                                <option value="4.5">4.5</option>
                                <option value="5">5+</option>
                            </select>
                            <label>How many bathrooms do you have?</label>
                        </Col>
                        <Col>
                            <Input placeholder=" " id="squareFootage" type="text" />
                            <label>What’s your approximate square footage?</label>
                        </Col>
                        <Col>
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="One Time">One Time</option>
                                <option value="Every week">Every week</option>
                                <option value="Every 2 weeks">Every 2 weeks</option>
                                <option value="Every 3 weeks">Every 3 weeks</option>
                                <option value="Every 4 weeks">Every 4 weeks</option>
                            </select>
                            <label>How often would you like us to clean?</label>
                        </Col>
                        <FormHeader>2. CHOOSE A SERVICE DATE</FormHeader>
                        <div style={this.state.showCalenda ? {display: "block"} : {display: "none"}}>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={date => this.handleDateChange(date)}
                                excludeDates = {this.state.blockedDate}
                                filterDate={this.isWeekday}
                                monthsShown={2}
                                minDate={new Date()}
                                inline
                            />

                        </div>

                        <Col>
                            <Input id="date" type="text" 
                                value={this.state.selectedDate.toString().slice(0,15)}
                                onClick={this.handleDateInputClick}
                            />

                            <label for="first_name">Date</label>
                        </Col>
                        <Col>
                            <Input id="time" type="text" />
                            <label for="first_name">Arrival Time</label>
                        </Col>

                        <FormHeader>3. ENTER YOUR CONTACT INFO</FormHeader>
                        <Col>
                            <Input id="first_name" type="text" />
                            <label for="first_name">First Name</label>
                        </Col>
                        <Col>
                            <Input id="last_name" type="text" />
                            <label for="last_name">Last Name</label>
                        </Col>
                        <Col>
                            <Input id="telephone" type="tel" />
                            <label for="telephone">Phone</label>
                        </Col>
                        <Col>
                            <Input id="email" type="email" />
                            <label for="email">Email</label>
                        </Col>
                        <Col>
                            <Input id="address1" type="text" />
                            <label for="address">Service Street Address</label>
                        </Col>
                        <Col>
                            <Input id="address2" type="text" />
                            <label for="address">Address 2</label>
                        </Col>
                        <Col>
                            <Input id="city" type="text" />
                            <label >City</label>
                        </Col>
                        <Col>
                            <Input id="zipCode" type="text" />
                            <label for="address">Zip Code</label>
                        </Col>
                        <div class="input-field col s12">
                            <textarea placeholder=" " id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea2">Special Request/Instruction</label>
                        </div>
                        <button className="btn btn-bookNow" type="submit" name="action">BOOK NOW</button>
                    </div>
                    <div className="card price-card col l4 s12">
                        <p>estimated quote display here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking
