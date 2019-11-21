import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { TwitterPATH, APP_URL_PROD } from "../../constants/constants";
import AppLogo from "../../components/logo";

function HomeComponent() {
  return (
    <div className="home-wrapper">
      <div className="form-wrapper">
        <Link to="/">
          <AppLogo className="form-logo" />
        </Link>

        <a href={`${APP_URL_PROD}${TwitterPATH}`}>
          <div className="login-button">
            Continue with Twitter
            <img
              src="https://img.icons8.com/cotton/32/000000/twitter.png"
              alt=""
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomeComponent;
