import React from "react";

export const CommentItem = ({ authorAvatar, authorName, authorPost }) => {
  return (
    <div className="comment_item">
      <p className="comment_paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        tempora corporis quod nisi, labore saepe architecto iste assumenda ab
        consequuntur?
      </p>
      <div className="author">
        <div className="author_img_container">
          <img src={authorAvatar} alt="" />
        </div>
        <div className="author_info">
          <h3 className="author_name">{authorName}</h3>
          <p className="author_post">{authorPost}</p>
        </div>
      </div>
    </div>
  );
};
