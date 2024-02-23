import React from 'react'
import Hero from './Hero/Hero'
import ToolsList from "./ToolList/ToolList";
import Breadcrumb from './Breadcrumb/Breadcrumb';
const HomePage = () => {
    return (
        <div className='container bg1'>
            <Hero />
            <ToolsList />
            <Breadcrumb />
        </div>
    )
}

export default HomePage