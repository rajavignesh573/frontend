import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const Navigate = useNavigate()
    const [formdata, setFormdata] = useState({
        name: "",
        role: ""
    })

    const handlechange = (event) => {
        const { name, value } = event.target
        setFormdata({
            ...formdata, [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("login", formdata)
        try {
            // if (formdata.role === "terraformer") {
            //     Navigate('/terraformerhome')
            // }
            const user = await axios.post('mongodb://localhost:27017api/loginuser', formdata)
            console.log("user", user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" value={formdata.name} onChange={handlechange} placeholder='name' /><br></br>
                <input type='text' name="role" value={formdata.role} onChange={handlechange} placeholder='role' /><br></br>
                <button type='submit'>Login</button>
            </form>

        </div>
    );
}

export default Login;