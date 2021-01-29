import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/Logo.png";

export const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">
          <div className="logo_img_container">
            <img src={logo} alt="" />
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Features</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Pricing</a>
            </li>
            <li>
              <a href="#home">Reviews</a>
            </li>
            <li>
              <a href="#home">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
