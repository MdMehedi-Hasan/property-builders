import React from "react";
import Review from "./Review";
import "./reviews.css";

const Reviews = (props) => {
    const objComment = props.comments
    return (
        <div>
            <h1 style={{fontSize:'40px' , marginLeft:'20px', display:'inline-block'}}>Some of our happy clients:- <hr /></h1>
            
      <div className="grid-comments">
      {objComment.map((comment) => (
        <Review comment={comment} key ={comment.id}></Review>
      ))}
            </div>
            </div>
  );
};

export default Reviews;
