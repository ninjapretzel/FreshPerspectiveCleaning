import React from "react"
import { Col } from "react-materialize"

export const JobCard = ({ job }) => {

    const {
        selectedDate,
        bedNum,
        bathNum,
        footageNum,
        frequency,
        arrivalTime,
        firstName,
        lastName,
        phone,
        email,
        address1,
        address2,
        city,
        state,
        zipCode,
        notes,
        jobAssignedTo,
        estimate } = job

    return (
        <Col className="card" l={ 6 } s={ 12 }>
            <p>Job Details</p>
            <p>Date: { new Intl.DateTimeFormat('en-US').format(new Date(selectedDate.split("T")[0])) } { arrivalTime } </p>
            <p>Client Name: { firstName } { lastName }</p>
            <p>Client Contact: { phone } | { email }</p>
            <p>House Summary: { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
            <p>Location: { address1 }, { address2 } { city }, { state }{ zipCode }</p>
            <p>Special Requests: { notes }</p>
            <p>Estimate: ${ estimate } </p>
            <p>Job Assigned To: { jobAssignedTo } </p>
        </Col>
    )
}