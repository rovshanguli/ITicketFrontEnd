// import {Carousel} from 'react-image-gallery'

import React from 'react'
// import Slider from '../Slider'

import ConcertsSlider from '../sliders/ConcertsSlider'
import InnovationsSlider from '../sliders/InnovationsSlider'
import KidsSlider from '../sliders/KidsSlider'
import TheatreSlider from '../sliders/TheatreSlider'
import TourismSlider from '../sliders/TourismSlider'
import FilmsSlider from '../sliders/FilmsSlider'
import Carousel from '../sliders/Carousel'
import Poster from '../Poster'
import MuseumSlider from '../sliders/MuseumSlider'









function Home() {
    return (
        <div >

            <Carousel />
            <InnovationsSlider />
            <ConcertsSlider />
            <TourismSlider />
            <KidsSlider />
            <TheatreSlider />
            <MuseumSlider />
            <FilmsSlider />
            <Poster />




        </div>

    )
}

export default Home