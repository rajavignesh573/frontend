import React, { useState } from 'react';

function Terraformerhome() {
    const [jobs, setjobs] = useState([

    ])

    const [formdata, setFormdata] = useState({
        title: "",
        description: "",
        location: "",
        deadline: "",
        phone: "",
        email: "",
        id: ""
    })

    const handlechange = (event) => {
        const { name, value } = event.target
        setFormdata({
            ...formdata, [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        formdata.id = Date.now()
        setjobs([
            ...jobs, formdata
        ])
        console.log("login", formdata)
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Terraformerhome</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="title" value={formdata.title} onChange={handlechange} placeholder='title' /><br></br>
                <input type='text' name="description" value={formdata.description} onChange={handlechange} placeholder='description' /><br></br>
                <input type='text' name="location" value={formdata.location} onChange={handlechange} placeholder='location' /><br></br>
                <input type='text' name="deadline" value={formdata.deadline} onChange={handlechange} placeholder='deadline' /><br></br>
                <input type='text' name="phone" value={formdata.phone} onChange={handlechange} placeholder='phone' /><br></br>
                <input type='text' name="email" value={formdata.email} onChange={handlechange} placeholder='email' /><br></br>
                <button type='submit'>Add job</button>
            </form>
            <h1>Listings</h1>
            <ul>
                {jobs.map((job) =>
                    <li key={job.id}>{job.title} {" - "}{job.description} {" - "}{job.location} {" - "}{job.deadline} {" - "}{job.phone} {" - "}{job.email} {" "}</li>
                )}
            </ul>

        </div>
    );
}

export default Terraformerhome;