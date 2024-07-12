import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import FormRow from './Form'
import "../pages/style/login.css";
const Login = () => {
  return (
    <div>
   <form className="form">
      <Logo />
      <h4>Register</h4>
       <FormRow type="email" name="Email" defaultValue="Your Email adresse" />
      <FormRow type="Password" name="Password" defaultValue="Your Password" />
      <button type="submit" className="btn btn-block">
        Login
      </button>
      <button type="submit" className="btn btn-block">
        Explore The App
      </button>
      <p>
        Not a member yet?
        <Link to="/register"> Register</Link>
      </p>
    </form>
    </div>
  )
}

export default Login
