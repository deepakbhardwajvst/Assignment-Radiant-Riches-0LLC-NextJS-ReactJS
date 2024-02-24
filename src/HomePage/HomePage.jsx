import React from 'react'
import Hero from './Hero/Hero'
import ToolsList from "./ToolList/ToolList";
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Card from './Card/Card';
import RelatedDeals from './RelatedDeals/RelatedDeals';
import NewsLatter from './NewsLatter/NewsLatter';

const HomePage = () => {
    return (
        <div className='container bg1'>
            <Hero />
            <ToolsList />
            <Breadcrumb />
            <Card />
            <RelatedDeals />
            <NewsLatter />
        </div>
    )
}

export default HomePage