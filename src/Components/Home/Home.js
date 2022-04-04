import React from 'react';
import image from '../../images/house.jpg'
import Review from '../Reviews/Review';
import './home.css'

const Home = (props) => {
    const objComment = props.comments.slice(0,3)
    return (
        <div>
            <section className='header-intro'>
                <div className='title'>
                    <h1>Build your dream home with <br/><span>Mohammadia Developers</span>
                    </h1>
                    <p>Mohammadia developers is the private developer company. For the last 75 years we are serving our customers with pride. If you are searching for a partner/mentor for your property. Mohammadia developers is the best choise.</p>
                    <button>See more</button>
                </div>
                <img width={600} height={400} src={image} alt="" />
            </section>
            <section className='home-review'>
                <h1>See reviews of our happy clients:({objComment.length})</h1>
                <div className="home-grid">
                {
                    objComment.map(comment => <Review comment={comment} key={comment.id}></Review>)
                }
                </div>
                <button className='home-review-btn'><a href="/reviews">See all reviews</a></button>
            </section>
        </div>
    );
};

export default Home;