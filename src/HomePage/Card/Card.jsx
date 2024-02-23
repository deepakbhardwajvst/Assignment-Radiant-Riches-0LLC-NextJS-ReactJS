import CardImg from "@/Components/Cards/CardImg";
import CardRating from "@/Components/Cards/CardRating";
import CardText from "@/Components/Cards/CardText";
import "./Card.scss";

const Card = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="card-container">
                    {item.image && <CardImg src={item.image} alt={item.imageHeading} />}
                    {item.rating && <CardRating rating={item.rating} star={item.star} />}
                    {item.heading && (
                        <CardText
                            heading={item.heading}
                            highlightHeading={item.highlightHeading}
                            highlightPara={item.highlightPara}
                            discount={item.discount}
                            mainPara={item.mainPara}
                            whyWeLoveItData={item.whyWeLoveItData}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Card;
