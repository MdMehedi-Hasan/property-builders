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
        <div>
            <h1 style={{fontSize:'40px' , marginLeft:'20px', display:'inline-block'}}>Some of our happy clients:- <hr /></h1>
            
      <div className="grid-comments">
      {comments.map((comment) => (
        <Review comment={comment} key ={comment.id}></Review>
      ))}
            </div>
            </div>
  );
};

export default Reviews;
