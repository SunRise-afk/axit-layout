import React from "react";
import "./StandardPicture.scss";
import standPicImg from "../../assets/images/image_right_standard_u262.png";

export const StandardPicture = () => {
  return (
    <section className="stand_pic">
      <div className="container">
        <div className="stand_pic_content">
          <h3 className="stand_pic_heading">Standard Picture Section</h3>
          <p className="stand_pic_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
            bibendum laoreet.
          </p>
        </div>
        <div className="stand_pic_img_container">
          <img src={standPicImg} alt="" />
        </div>
      </div>
    </section>
  );
};
