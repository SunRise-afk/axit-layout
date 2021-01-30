import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/Logo.png";

export const Navbar = () => {
  const [isBurgerClosed, setIsBurgerClosed] = useState(true);
  const burgerMenuClickHandler = () => {
    setIsBurgerClosed(!isBurgerClosed);
  };
  return (
    <section className="navbar">
      <div className="container">
        <div className="logo">
          <div className="logo_img_container">
            <img src={logo} alt="" />
          </div>
        </div>
        <div
          className="burger_button_container"
          onClick={burgerMenuClickHandler}
        >
          <div className={`burger_button ${!isBurgerClosed && "close"}`}></div>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container container_burger">
        <nav className={`nav_burger ${!isBurgerClosed && "display"}`}>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
