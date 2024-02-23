import React from 'react'
import Hero from './Hero/Hero'
import ToolsList from "./ToolList/ToolList";
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Card from './Card/Card';

const HomePage = () => {
    return (
        <div className='container bg1'>
            <Hero />
            <ToolsList />
            <Breadcrumb />
            <Card />
        </div>
    )
}

export default HomePage