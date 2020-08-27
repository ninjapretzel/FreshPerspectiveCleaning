import React, { Component } from "react"
import { Input } from "../components/Forms/Input.js"
import { Col } from "../components/Forms/Col-s12-l6"
import { FormHeader } from "../components/Forms/FormHeader"
import M from "materialize-css"



class Booking extends Component {

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
                        <Col>
                            <Input id="date" type="text" />
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
