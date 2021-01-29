import React, { useState } from "react";
import "./Tabs.scss";
import tabImg from "../../assets/images/image_right_u255.png";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeActiveTabHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <section className="tabs">
      <div className="container">
        <div className="tab_buttons">
          <div
            className={`tab_button ${activeTab === 1 ? "orange_bg" : ""}`}
            onClick={() => changeActiveTabHandler(1)}
          >
            Tab 1
          </div>
          <div
            className={`tab_button ${activeTab === 2 ? "orange_bg" : ""}`}
            onClick={() => changeActiveTabHandler(2)}
          >
            Tab 2
          </div>
          <div
            className={`tab_button ${activeTab === 3 ? "orange_bg" : ""}`}
            onClick={() => changeActiveTabHandler(3)}
          >
            Tab 3
          </div>
        </div>
        <div className="tab_content_container">
          <div className={`tab_content ${activeTab === 1 ? "displayed" : ""}`}>
            <h3 className="tab_content_heading">
              Tabs with soft transitioning effect.
            </h3>
            <p className="tab_content_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <div className="tab_content_button">Download</div>
          </div>
          <div className={`tab_content ${activeTab === 2 ? "displayed" : ""}`}>
            <h3 className="tab_content_heading">
              Tabs with soft transitioning effect.
            </h3>
            <p className="tab_content_paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium dignissimos quas eaque iste beatae ducimus.
            </p>
            <div className="tab_content_button">Download</div>
          </div>
          <div className={`tab_content ${activeTab === 3 ? "displayed" : ""}`}>
            <h3 className="tab_content_heading">
              Tabs with soft transitioning effect.
            </h3>
            <p className="tab_content_paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              assumenda.
            </p>
            <div className="tab_content_button">Download</div>
          </div>
        </div>
        <div className="tab_image_container">
          <img
            src={tabImg}
            alt=""
            className={`tab_img ${activeTab === 1 ? "displayed" : ""}`}
          />
          <img
            src={tabImg}
            alt=""
            className={`tab_img ${activeTab === 2 ? "displayed" : ""}`}
          />
          <img
            src={tabImg}
            alt=""
            className={`tab_img ${activeTab === 3 ? "displayed" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};
