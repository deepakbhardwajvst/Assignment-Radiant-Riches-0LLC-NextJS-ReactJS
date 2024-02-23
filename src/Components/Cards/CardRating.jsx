import ButtonTag from "../ButtonTag/ButtonTag";
import './Cards.scss'

const CardRating = ({ rating, ratingTag, star }) => {
    return (
        <div className="card-rating">
            <div className="rating-box">
                <div className="rating">{rating}</div>
                <div className="ratingTag">{ratingTag}</div>
                <div className="star">Star: {star}</div>
            </div>
            <ButtonTag name="view" />
        </div>
    );
}

export default CardRating;
