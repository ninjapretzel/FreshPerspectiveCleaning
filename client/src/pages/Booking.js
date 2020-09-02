import React, { Component } from "react"
import BookingForm from "../components/BookingForm"
import { Row } from "react-materialize"
import axios from "axios"
import M from "materialize-css"

class Booking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // simon start
            // calendar state, simon codes here
            showCalendar: false,
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
            ],
            // simon end

            // dori codes here
            // form states 
            bedNum: "",
            bathNum: "",
            footageNum: "",
            frequency: "",
            arrivalTime: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            zipCode: "",
            notes: ""
        }
    }

    // simon start calendar method
    handleDateInputClick = () => {
        this.setState({ showCalendar: true })
    }
    handleDateChange = date => {
        this.setState({
            startDate: date,
            selectedDate: date,
            showCalendar: false,
        });
        console.log(date)
    };
    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
    // simon end

    // dori starts form methods
    handleFormInputChange = event => {
        let value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // collecting form data
        // const { selectedDate,
        //     bedNum,
        //     bathNum,
        //     footageNum,
        //     frequency,
        //     arrivalTime,
        //     firstName,
        //     lastName,
        //     phone,
        //     email,
        //     address1,
        //     address2,
        //     city,
        //     zipCode,
        //     notes } = this.state
        // const formData = {
        //     selectedDate,
        //     bedNum,
        //     bathNum,
        //     footageNum,
        //     frequency,
        //     arrivalTime,
        //     firstName,
        //     lastName,
        //     phone,
        //     email,
        //     address1,
        //     address2,
        //     city,
        //     zipCode,
        //     notes
        // }

        axios.post("/api/booknow", this.state)
            .then(res => {
                console.log(res)
                event.target.reset()
                this.setState({
                    selectedDate: "",
                    bedNum: "",
                    bathNum: "",
                    footageNum: "",
                    frequency: "",
                    arrivalTime: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address1: "",
                    address2: "",
                    city: "",
                    zipCode: "",
                    notes: ""
                })
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <Row>
                <BookingForm
                    // calendar simon codes
                    date={ this.state.selectedDate.toString().slice(0, 15) }
                    style={ this.state.showCalendar ? { display: "block" } : { display: "none" } }
                    isWeekday={ this.isWeekday }
                    excludeDates={ this.state.blockedDate }
                    selected={ this.state.startDate }
                    handleDateInputClick={ this.handleDateInputClick }
                    handleDateChange={ date => this.handleDateChange(date) }
                    // form dori codes here
                    handleFormInputChange={ this.handleFormInputChange }
                    handleFormSubmit={ this.handleFormSubmit }
                    bedNum={ this.state.bedNum }
                    bathNum={ this.state.bathNum }
                    footageNum={ this.state.footageNum }
                    frequency={ this.state.frequency }
                    arrivalTime={ this.state.arrivalTime }
                    firstName={ this.state.firstName }
                    lastName={ this.state.lastName }
                    phone={ this.state.phone }
                    email={ this.state.email }
                    address1={ this.state.address1 }
                    address2={ this.state.address2 }
                    city={ this.state.city }
                    zipCode={ this.state.zipCode }
                    notes={ this.state.notes }
                />
            </Row>
        )
    }
}
export default Booking
