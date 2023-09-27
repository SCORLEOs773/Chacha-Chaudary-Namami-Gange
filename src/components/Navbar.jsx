import React from "react";
import NavLogo from "../assets/images/navlogo.png";
import Name from "../assets/images/NMCG name.png";
import FLogo from "../assets/images/Full Logo.png";
import CCHead from "../assets/images/cc head.png";
import Formula from "../assets/images/formula.gif";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/* <img src={NavLogo} alt="" /> */}
            {/* <img src={Name} alt="" /> */}
            <img src={FLogo} alt="NMCG" />
            {/* <img src={CCHead} alt="NMCG" /> */}
            {/* <img src={Formula} alt="NMCG" /> */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0 gap-4"
              style={{ marginLeft: "60px" }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active with-border"
                  style={{ color: "skyblue" }}
                  aria-current="page"
                  href="#"
                >
                  Chacha Chaudary
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link with-border"
                  style={{ color: "skyblue" }}
                  href="#"
                >
                  Programs & Initiatives
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  River Ecology
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link with-border"
                  style={{ color: "crimson" }}
                  href="#"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
