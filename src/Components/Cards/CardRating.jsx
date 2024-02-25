import React from 'react';
import ButtonTag from '../ButtonTag/ButtonTag';
import './Cards.scss';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < filledStars; i++) {
            stars.push(<span key={i} className="star-filled"><FaStar /></span>);
        }
        if (hasHalfStar) {
            stars.push(<span key="half" className="star-half"><FaStarHalfAlt /></span>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<span key={i} className="star-empty"><FaRegStar /></span>);
        }
        return stars;
    };

    return <div className="star-rating">{renderStars()}</div>;
};

const CardRating = ({ rating, ratingTag, star }) => {
    return (
        <div className="card-rating">
            <div className="rating-box">
                <div className="rating">{rating}</div>
                <div className="ratingTag">{ratingTag}</div>
                <StarRating rating={star} />
            </div>
            <ButtonTag name="view" />
        </div>
    );
};

export default CardRating;
