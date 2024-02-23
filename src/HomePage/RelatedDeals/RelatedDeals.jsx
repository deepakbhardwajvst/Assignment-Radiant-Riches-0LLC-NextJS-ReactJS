import DealsCard from '@/Components/DealsCard/DealsCard'
import './RelatedDeals.scss'

const RelatedDeals = () => {
    const data = [{
        img: "/cardimg.png",
        discount: "20% Off",
        period: "Limited time",
        heading: "Webbuilder 1",
        fullName: "Computer Modern clasic with wix support",
        currentPrice: "$39.96",
        oldPrice: "$49.96",
    }, {
        img: "/cardimg.png",
        discount: "20% Off",
        period: "Limited time",
        heading: "Webbuilder 1",
        fullName: "Computer Modern clasic with wix support",
        currentPrice: "$39.96",
        oldPrice: "$49.96",
    }, {
        img: "/cardimg.png",
        discount: "20% Off",
        period: "Limited time",
        heading: "Webbuilder 1",
        fullName: "Computer Modern clasic with wix support",
        currentPrice: "$39.96",
        oldPrice: "$49.96",
    }]
    return (
        <div className='RelatedDeals'>
            <h2 className="RD-heading">Related deals you might like for</h2>
            <div className="rd-data">
                {
                    data.map((item, index) => {
                        return (
                            <DealsCard key={index} item={item} />
                        )
                    })
                }</div>
        </div>
    )
}

export default RelatedDeals