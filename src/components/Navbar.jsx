import React from "react";
import FLogo from "../assets/images/Full Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={FLogo} alt="NMCG" />
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
                  className="nav-link active with-border"
                  aria-current="page"
                  href="#"
                >
                  Chacha Chaudhary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/api" className="nav-link with-border" href="#">
                  Programs & Initiatives
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link with-border" href="#">
                  River Ecology
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link with-border" href="#">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link with-border" href="#">
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
