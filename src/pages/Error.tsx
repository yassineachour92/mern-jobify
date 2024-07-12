import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/not-found.svg";

import "../pages/style/error.css";

const Error = () => {
  const error: any = useRouteError();

  if (error.status === 404) {
    return (
      <div className="error-page">
        <img src={errorImg} alt="not found" className="src" />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you looking for</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>something went wrong</h3>
    </div>
  );
};

export default Error;
