import CardImg from "@/Components/Cards/CardImg";
import CardRating from "@/Components/Cards/CardRating";
import CardText from "@/Components/Cards/CardText";
import "./Card.scss";
import CardData from "@/Data/CardData.json"
const Card = () => {
    if (!CardData || !Array.isArray(CardData)) {
        console.error("CardData is not properly defined or is not an array.");
        return null;
    }
    return (
        <div className="card">
            {CardData.map((item, index) => (
                <div key={index} className="card-container">
                    {item.image && <CardImg src={item.image} alt={item.imageHeading} />}
                    {item.heading && (
                        <CardText
                            heading={item.heading}
                            para={item.para}
                            highlightHeading={item.highlightHeading}
                            highlightPara={item.highlightPara}
                            discount={item.discount}
                            mainPara={item.mainPara}
                            whyWeLoveItData={item.whyWeLoveItData}

                            showMoreLink={item.showMoreLink}
                        />
                    )}
                    {item.rating && <CardRating rating={item.rating} ratingTag={item.ratingTag} star={item.star} />}
                </div>
            ))}
        </div>
    );
}

export default Card;
