import React from 'react';
import './review.css'

const Review = (props) => {
    const {picture, name, about, ratings} = props.comment
    console.log(props)
    return (
        <div className='perComment'>
            <p className='detail-comment'>{about}</p>
            <div className='flex-section'>
                <img src={picture} alt="" />
                <p>{name} <br></br>{"Ratings:"} {ratings} {"Stars"}</p>
            </div>
            {/* <p>Ratings: {ratings} stars</p> */}
        </div>
    );
};

export default Review;