import React from "react";
import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact_heading">CONTACT US</h2>
        <p className="contact_paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form action="" className="contact_form">
          <div className="form_col">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form_col">
            <textarea name="" placeholder="Message"></textarea>
          </div>
        </form>
        <div className="submit_button">Send Message</div>
      </div>
    </section>
  );
};
