import React from "react";
import "./Jumbo.scss";
import logo from "../../assets/images/Logo.png";

export const Jumbo = () => {
  return (
    <section className="jumbo">
      <div className="container">
        <div className="jumbo_content">
          <div className="content_img_container">
            <img src={logo} alt="" />
          </div>
          <h1 className="content_heading">
            MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES
          </h1>
          <p className="content_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.
          </p>
          <div className="download_button">Download</div>
        </div>
        <div className="jumbo_form">
          <div className="form_wrapper">
            <h3>
              Try Your <span>FREE</span> Trial Today
            </h3>
            <div className="inputs_container">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="submit_button">Get Started</div>
          </div>
        </div>
      </div>
    </section>
  );
};
