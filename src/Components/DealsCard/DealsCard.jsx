import "./DealsCard.scss"
import ButtonTag from './../ButtonTag/ButtonTag';
import Image from "next/image";
const DealsCard = ({ item }) => {

    return (
        <div className="DealsCard">
            <div className="dc-img"><Image
                src={item.img} alt={item.fullName} className="dc-image"
                height={480}
                width={480}
                loading="lazy"
            /></div>
            <div className="dc-offer-box">
                <p className="dc-discount">{item.discount}</p><p className="dc-period">{item.period}</p>
            </div>
            <div className="dc-head-box"><h4 className="dc-heading">{item.heading}</h4>
                <h5 className="dc-fullname">{item.fullName}</h5></div>
            <div className="dc-price-box">
                <p className="dc-current-price">{item.currentPrice}</p>
                <p className="dc-old-price">{item.oldPrice}</p>
                <p className="dc-discount-percentage">({item.discount})</p>
            </div>

            <ButtonTag name="View Deal" />
        </div>
    )
}

export default DealsCard