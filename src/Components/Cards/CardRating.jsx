import React from 'react';

const CardRating = ({ rating, star }) => {
    return (
        <div>
            <div>Rating: {rating}</div>
            <div>Star: {star}</div>
        </div>
    );
}

export default CardRating;
