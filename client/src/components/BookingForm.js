import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Col } from "react-materialize"

function BookingForm(props) {
    return (
        <div>
            <Col className="card" l={ 8 } s={ 12 }>
                <h5>1. ENTER YOUR PROPERTY INFO</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select defaultValue={ 0 }>
                        <option disabled selected>Choose your option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6+</option>
                    </select>
                    <label>How many bedrooms do you have?</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select defaultValue={ 0 }>
                        <option value="0" disabled selected>Choose your option</option>
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
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input placeholder=" " id="squareFootage" type="text" />
                    <label>What’s your approximate square footage?</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select defaultValue={ "0" }>
                        <option value="0" disabled selected>Choose your option</option>
                        <option value="One Time">One Time</option>
                        <option value="Every week">Every week</option>
                        <option value="Every 2 weeks">Every 2 weeks</option>
                        <option value="Every 3 weeks">Every 3 weeks</option>
                        <option value="Every 4 weeks">Every 4 weeks</option>
                    </select>
                    <label>How often would you like us to clean?</label>
                </Col>
                <h5>2. CHOOSE A SERVICE DATE</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input placeholder=" " id="date" type="text"
                        date={ props.date }
                        onClick={ props.handleDateInputClick }
                    />
                    <label>Date</label>
                </Col>
                <div style={ props.style }>
                    <DatePicker
                        selected={ props.selected }
                        onChange={ props.handleDateChange }
                        excludeDates={ props.excludeDates }
                        filterDate={ props.isWeekday }
                        monthsShown={ 2 }
                        minDate={ new Date() }
                        inline
                    />
                </div>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select defaultValue={ "0" }>
                        <option value="0" disabled selected>Choose your option</option>
                        <option value="morning">Morning Arrival between 8AM - 9AM</option>
                        <option value="afternoon">Afternoon Arrival between 12PM - 1PM</option>
                    </select>
                    <label>Arrival Time</label>
                </Col>
                <h5>3. ENTER YOUR CONTACT INFO</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="first_name" type="text" />
                    <label>First Name</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="last_name" type="text" />
                    <label>Last Name</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="telephone" type="tel" />
                    <label>Phone</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="email" type="email" />
                    <label>Email</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="address1" type="text" />
                    <label>Service Street Address</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="address2" type="text" />
                    <label>Address 2</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="city" type="text" />
                    <label>City</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input id="zipCode" type="text" />
                    <label>Zip Code</label>
                </Col>
                <Col className="input-field" l={ 12 } s={ 12 }>
                    <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                    <label>Special Request/Instruction</label>
                </Col>
            </Col>
            <Col className="card price-card" l={ 4 } s={ 12 } >
                <p>estimated quote display here</p>
            </Col>
            <Col l={ 8 } s={ 12 }>
                <button className="btn btn-bookNow" type="submit" name="action">BOOK NOW</button>
            </Col>
        </div>
    )
}

export default BookingForm