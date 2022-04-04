import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./reviews.css";

const Reviews = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("comments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div className="grid-comments">
      {comments.map((comment) => (
        <Review comment={comment}></Review>
      ))}
    </div>
  );
};

export default Reviews;
