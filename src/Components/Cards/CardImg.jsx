import React from 'react';

const CardImg = ({ src, alt }) => {
    return (
        <div className="card-img-container">
            <img className="card-img" src={src} alt={alt} />
        </div>
    );
}

export default CardImg;
