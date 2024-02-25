import './Cards.scss'
import Image from "next/image";
const CardImg = ({ src, alt }) => {
    return (
        <div className="card-img-container">
            <Image
                className="card-img" src={src} alt={alt}
                height={480}
                width={480}
                priority={true}
            />
            <p className="card-img-para">{alt}</p>
        </div>
    );
}

export default CardImg;
