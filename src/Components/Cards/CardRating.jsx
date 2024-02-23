import React from 'react';

const CardRating = ({ rating, ratingTag, star }) => {
    return (
        <div className="card-rating">
            <div className="rating-box">
                <div className="rating">{rating}</div>
                <div className="ratingTag">{ratingTag}</div>
                <div className="star">Star: {star}</div>
            </div>
            <button type="button" className='btn-view'><div className="">View</div></button>
        </div>
    );
}

export default CardRating;
