import React from "react";
import main from "../assets/main-alternative.svg";

import { Link } from "react-router-dom";

import "../pages/style/landing.css";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <div>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
          <div className="link-button">
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login / Demo User
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
