import React from 'react'
import Hero from './Hero/Hero'
import ToolsList from "./ToolList/ToolList";
const HomePage = () => {
    return (
        <div className='container'>
            <Hero />
            <ToolsList />
        </div>
    )
}

export default HomePage