import React, { Component } from "react"
import BookingForm from "../components/BookingForm"
import { Row } from "react-materialize"
import M from "materialize-css"

class Booking extends Component {

    state = {
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
        ]
        // simon end

        //     // form states dori codes here
        //     bedNum: "0",
        //     bathNum: "0",
        //     footageNum: "0",
        //     frequency: "0",
        //     arrivalTime: "",
        //     firstName: "",
        //     firstName: "",
    }

    // simon start
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
                />
            </Row>
        )
    }
}
export default Booking
