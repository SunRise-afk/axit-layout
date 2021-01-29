import React from "react";
import "./Socials.scss";

export const Socials = () => {
  return (
    <section className="socials">
      <div className="container">
        <div className="socials_content">
          <h3 className="socials_heading">Social Media</h3>
          <p className="socials_paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
            cumque.
          </p>
        </div>
        <div className="socials_links">
          <a href="https://github.com/SunRise-afk">
            <i className="fab fa-facebook-f" rel="noreferer"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://github.com/SunRise-afk" rel="noreferer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
