import React from 'react';
import image from '../../images/house.jpg'
import './home.css'

const Home = () => {
    return (
        <div>
            <section className='header-intro'>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum quae, odit debitis tempora error, temporibus recusandae facilis dolorem, perferendis sit eligendi nostrum nobis asperiores impedit voluptatem molestias cupiditate quis?</p>
                    <button>See more</button>
                </div>
                <img width={600} height={400} src={image} alt="" />
            </section>
            <section>
                <h1>See all reviews of our happy clients</h1>
                <button>See all reviews</button>
            </section>
        </div>
    );
};

export default Home;