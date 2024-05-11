import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [cred, setCred] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(cred);
        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, geolocation: cred.geolocation })
            });

            const json = await response.json();
            console.log(json);
            if (json.success) {
                //save the auth token to local storage and redirect
                alert("Successfully Signed Up")
            } else {
                alert("Enter Valid Credentials")
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    }

    const onchange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={cred.name} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={cred.email} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={cred.password} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="geolocation" className="form-label">Location</label>
                        <input type="text" className="form-control" name="geolocation" value={cred.geolocation} onChange={onchange} />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}

export default Signup;
