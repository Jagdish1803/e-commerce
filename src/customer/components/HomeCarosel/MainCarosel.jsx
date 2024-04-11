import React from 'react';
import { MainCaroselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const MainCarosel = () => {
    const items = MainCaroselData.map((items)=> < img className= 'cusor-pointer' role ='presentation'src={items.Image}alt=""/>)

    return(

    <AliceCarousel
        items={items}
        disableDotsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
}

export default MainCarosel;