import './Cards.scss'

const CardImg = ({ src, alt }) => {
    return (
        <div className="card-img-container">
            <img className="card-img" src={src} alt={alt} />
            <p className="card-img-para">{alt}</p>
        </div>
    );
}

export default CardImg;
