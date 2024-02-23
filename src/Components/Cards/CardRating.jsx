import React from 'react';

const CardRating = ({ rating, star }) => {
    return (
        <div className="card-rating">
            <div className="rating">Rating: {rating}</div>
            <div className="star">Star: {star}</div>
        </div>
    );
}

export default CardRating;
