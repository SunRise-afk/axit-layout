import React from "react";
import "./Process.scss";

export const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process_content_row">
          <h2 className="process_heading">WHY THIS IS AWESOME</h2>
          <p className="process_paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="process_items_row">
          <div className="process_item">
            <i className="fab fa-sketch"></i>
            <h3 className="process_item_heading">Thoughtful Design</h3>
            <p className="process_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
          <div className="process_item">
            <i className="far fa-keyboard"></i>
            <h3 className="process_item_heading">Well Crafted</h3>
            <p className="process_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
          <div className="process_item">
            <i className="fas fa-bolt"></i>
            <h3 className="process_item_heading">Easy to Customize</h3>
            <p className="process_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
