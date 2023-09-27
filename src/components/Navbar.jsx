import React from "react";
// import NavLogo from "../assets/images/navlogo.png";
// import Name from "../assets/images/NMCG name.png";
import FLogo from "../assets/images/Full Logo.png";
import CCHead from "../assets/images/cc head.png";
import Formula from "../assets/images/formula.gif";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src={NavLogo} alt="" /> */}
            {/* <img src={Name} alt="" /> */}
            <img src={FLogo} alt="NMCG" />
            {/* <img src={CCHead} alt="NMCG" /> */}
            {/* <img src={Formula} alt="NMCG" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 gap-4"
              style={{ marginLeft: "60px" }}
            >
              <li classNameName="nav-item">
                <Link
                  to="/chatbot"
                  classNameName="nav-link active with-border"
                  style={{ color: "crimson" }}
                  aria-current="page"
                  href="#"
                >
                  Chacha Chaudary
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link
                  to="/api"
                  classNameName="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  Programs & Initiatives
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  River Ecology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
