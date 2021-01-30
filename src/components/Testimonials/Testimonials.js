import React from "react";
import { CommentItem } from "./CommentItem";
import "./Testimonials.scss";
import authorAvatar from "../../assets/images/avatar_2_u231.png";

export const Testimonials = () => {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <h2 className="testimonials_heading">WHAT OUR CUSTOMERS ARE SAYING</h2>
        <p className="testimonials_paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="comments_row">
          <CommentItem
            authorAvatar={authorAvatar}
            authorName="Jeremy H."
            authorPost="Manager"
          ></CommentItem>
          <CommentItem
            authorAvatar={authorAvatar}
            authorName="John S."
            authorPost="Freelancer"
          ></CommentItem>
          <CommentItem
            authorAvatar={authorAvatar}
            authorName="Susan W."
            authorPost="Photographer"
          ></CommentItem>
        </div>
      </div>
    </section>
  );
};
