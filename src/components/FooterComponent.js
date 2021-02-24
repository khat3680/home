import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 offset-3 col-sm-6">
            <ul class="list-inline">
              <li class="list-inline-item">
                {" "}
                <Link to="/home">
                  <h4>Home</h4>
                </Link>
              </li>
              <li class="list-inline-item">
                {" "}
                <Link to="/aboutus">
                  <h4>About</h4>
                </Link>
              </li>
              <li class="list-inline-item">
                {" "}
                <Link to="/contactus">
                  <h4>Contact Me</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Anshul Khatri</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
