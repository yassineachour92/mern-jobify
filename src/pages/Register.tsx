import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import FormRow from "./Form";

import "../pages/style/register.css";

const Register = () => {
  return (
    <form className="form">
      <Logo />
      <h4>Register</h4>
      <FormRow type="text" name="name" defaultValue="Your Name" />
      <FormRow type="text" name="LastName" labelText="LastName" defaultValue="Your Last Name" />
      <FormRow type="text" name="Location" defaultValue="Your Location" />
      <FormRow type="email" name="Email" defaultValue="Your Email adresse" />
      <FormRow type="Password" name="Password" defaultValue="Your Password" />
   
      <button type="submit" className="btn btn-block">
        Register
      </button>
      <p>
        Already a member? 
        <Link to="/login" className="member-btn">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
