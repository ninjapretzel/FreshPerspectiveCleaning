import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Col, Icon } from "react-materialize"

// datepicker localization
import { registerLocale } from "react-datepicker"
import us from "date-fns/locale/en-US"
registerLocale("us", us)


function BookingForm(props) {
    return (
        <form onSubmit={ props.handleFormSubmit }>
            <Col className="card" l={ 8 } s={ 12 }>
                <h5>1. ENTER YOUR PROPERTY INFO</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select name="bedNum" value={ props.bedNum }
                        onChange={ props.handleFormInputChange } >
                        <option disabled default value="">Choose your option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6+">6+</option>
                    </select>
                    <label>How many bedrooms do you have?</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select name="bathNum" value={ props.bathNum } onChange={ props.handleFormInputChange }>
                        <option disabled value="">Choose your option</option>
                        <option>1</option>
                        <option>1.5</option>
                        <option>2</option>
                        <option>2.5</option>
                        <option>3</option>
                        <option>3.5</option>
                        <option>4</option>
                        <option>4.5</option>
                        <option>5+</option>
                    </select>
                    <label>How many bathrooms do you have?</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input placeholder=" " name="footageNum" type="text"
                        value={ props.footageNum }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>What’s your approximate square footage?</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select name="frequency" value={ props.frequency } onChange={ props.frequencyChange }>
                        <option disabled value="">Choose your option</option>
                        <option>One Time</option>
                        <option>Every Week</option>
                        <option>Every 2 Weeks</option>
                        <option>Every 3 Weeks</option>
                        <option>Every 4 Weeks</option>
                    </select>
                    <label>How often would you like us to clean?</label>
                </Col>
                <h5>2. CHOOSE A SERVICE DATE</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input placeholder=" " name="date" type="text"
                        value={ props.date }
                        onClick={ props.handleDateInputClick }
                    />
                    <label>Date</label>
                </Col>
                <div style={ props.calendarStyle }>
                    <DatePicker
                        selected={ props.selected }
                        onChange={ props.handleDateChange }
                        excludeDates={ props.excludeDates }
                        filterDate={ props.isWeekday }
                        monthsShown={ 2 }
                        minDate={ new Date() }
                        locale="us"
                        inline
                    />
                </div>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <select value={ props.arrivalTime } name="arrivalTime" onChange={ props.handleFormInputChange }>
                        <option disabled value="">Choose your option</option>
                        <option>Morning Arrival between 8AM - 9AM</option>
                        <option>Afternoon Arrival between 12PM - 1PM</option>
                    </select>
                    <label>Arrival Time</label>
                </Col>
                <h5>3. ENTER YOUR CONTACT INFO</h5>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="firstName" type="text"
                        value={ props.firstName }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>First Name</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="lastName" type="text"
                        value={ props.lastName }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>Last Name</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="phone" type="tel"
                        value={ props.phone }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>Phone</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="email" type="email"
                        value={ props.email }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>Email</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="address1" type="text"
                        value={ props.address1 }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>Service Street Address</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="address2" type="text"
                        value={ props.address2 }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>Address 2</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="city" type="text"
                        value={ props.city }
                        onChange={ props.handleFormInputChange }
                    />
                    <label>City</label>
                </Col>
                <Col className="validate input-field" l={ 6 } s={ 12 }>
                    <input name="zipCode" type="text"
                        value={ props.zipCode } onChange={ props.handleFormInputChange } />
                    <label>Zip Code</label>
                </Col>
                <Col className="input-field" l={ 12 } s={ 12 }>
                    <textarea name="notes" className="materialize-textarea" data-length="120"
                        value={ props.notes }
                        onChange={ props.handleFormInputChange }></textarea>
                    <label>Special Request/Instruction</label>
                </Col>
            </Col>
            <Col className="card price-card" l={ 4 } s={ 12 } >
                <h5 id="estimate">ESTIMATE</h5>
                <div className="container" style={ props.estimateStyle }>
                    <h6><Icon small>home </Icon>{ props.bedNum } beds / { props.bathNum } baths / { props.footageNum } ft² </h6>
                    <h6><Icon small>event </Icon>Clean { props.frequency }</h6>
                </div>
                <div className="container" style={ props.preEstimateStyle }>
                    <h6>Your estimate will display below after you enter your property info.</h6>
                </div>
                <h5 id="total">TOTAL: <span id="price">$ { props.estimate }</span></h5>
            </Col>
            <Col l={ 8 } s={ 12 }>
                <button className="btn btn-bookNow" type="submit" name="action">BOOK NOW</button>
            </Col>
        </form>
    )
}

export default BookingForm