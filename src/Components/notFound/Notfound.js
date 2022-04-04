import React from 'react';
import image from '../../images/404.png'

const Notfound = () => {
    return (
        <div>
            <img style={{margin:'auto',display:'block'}} src={image} alt="" />
            <h1 style={{textAlign:'center'}}>The page you are searching for is not available.</h1>
        </div>
    );
};

export default Notfound;