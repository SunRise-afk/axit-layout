import React from "react";
import "./Sublist.scss";
import sublistImg from "../../assets/images/image_left_sub_list_u260.png";

export const Sublist = () => {
  return (
    <section className="sublist">
      <div className="container">
        <div className="sublist_img_container">
          <img src={sublistImg} alt="" />
        </div>
        <div className="sublist_content">
          <div className="sublist_content_description">
            <h3 className="sublist_content_heading">Sub list section</h3>
            <p className="sublsit_content_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
          </div>
          <div className="sublist_titles">
            <div className="sublist_title">
              <i className="fas fa-cloud-upload-alt"></i>
              <div className="sublist_title_description">
                <h5>Title</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.
                </p>
              </div>
            </div>
            <div className="sublist_title">
              <i className="fas fa-cloud-download-alt"></i>
              <div className="sublist_title_description">
                <h5>Title</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
