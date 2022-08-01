import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    const regst = (event)=>{
        event.preventDefault()
        let user={"uname":event.target.uname.value,"email":event.target.email.value,"password":event.target.pass.value}
        console.log(user)
        axios.post("http://localhost:3200/users",user)
        .then(res=>navigate("/login"))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <form className="w-50 mx-auto" onSubmit={regst}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            name="uname"
            required
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text text-info">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="pass"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-auto">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
