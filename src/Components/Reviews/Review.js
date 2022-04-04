import React from "react";
import "./review.css";

const Review = (props) => {
  const { picture, name, about, ratings } = props.comment;
  return (
      <div className="perComment">
      <p className="detail-comment">{about}</p>
      <div className="flex-section">
        <img src={picture} alt="" />
        <p>
          {name} <br></br>
          {"Ratings:"} {ratings} {"Stars"}
        </p>
      </div>
    </div>
  );
};

export default Review;
