import React, { useState, useEffect } from "react"
import { Row } from "react-materialize"
import axios from "axios"
import { JobCard } from "../components/AdminJobCard"

const GetJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("/api/getjobs")
            .then(res => setJobs(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(jobs)

    return (
        <div className="container">
            <h1>test</h1>
            <Row>
                { jobs.map((job, _id) => {
                    return (
                        <JobCard
                            key={ _id }
                            job={ job }
                        />
                    )
                }) }
            </Row>
        </div>
    )
}

export default GetJobs
