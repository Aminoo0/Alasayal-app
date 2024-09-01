import React from 'react'
import Header from '../../Components/Header/Header'
import AboutUsCaption from '../../Components/AboutUs/AboutUsCaption'
import OurServise from '../../Components/OurServies/OurServise'
import OurCarsCaption from '../../Components/OurCarsCaption/OurCarsCaption'
import OurClient from '../../Components/OurClient/OurClient'

export default function Home() {
    return (
        <div className='overflow-hidden'>
            <Header />
            <AboutUsCaption />
            <OurServise />
            <OurCarsCaption />
            <OurClient />
        </div>
    )
}
