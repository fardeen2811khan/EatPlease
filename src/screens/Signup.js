import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

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
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
          <div>
          <Navbar />
          </div>
    
            <div className='container' >
              <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
                <div className="m-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={cred.name} onChange={onchange} aria-describedby="emailHelp" />
                </div>
                <div className="m-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" name='email' value={cred.email} onChange={onchange} aria-describedby="emailHelp" />
                </div>
                <div className="m-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <fieldset>
                    <input type="text" className="form-control" name='address' aria-describedby="emailHelp" />
                  </fieldset>
                </div>
               
                <div className="m-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" value={cred.password} onChange={onchange} name='password' />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
              </form>
            </div>
          </div>
      )
}

export default Signup;
