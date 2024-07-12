import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import "../pages/style/register.css";
const Register = () => {
  return (
    <form className="form">
      <Logo />
      <h4>Register</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Your Name"
          required
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
      <p>
        Already a member?
        <Link to="/login" className="member-btn">
          Login Page
        </Link>
      </p>
    </form>
  );
};

export default Register;
