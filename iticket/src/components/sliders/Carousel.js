import React from 'react'
import ImageGallery from 'react-image-gallery';

import '../../assets/sass/carousel.scss'

function Carousel() {
    const images = [
        {
          original: 'https://cdn.iticket.az/event/slide/xyRzBPqRtK3fjAs5obREskf3ZN9i22lnvkJMxGAE.jpg',
          thumbnail: 'https://cdn.iticket.az/event/slide/xyRzBPqRtK3fjAs5obREskf3ZN9i22lnvkJMxGAE.jpg',
        },
        {
          original: 'https://cdn.iticket.az/event/slide/VTOQ6n8YjX6qeD6f42FKjgSos3Yik1iZNTEzerE1.jpg',
          thumbnail: 'https://cdn.iticket.az/event/slide/VTOQ6n8YjX6qeD6f42FKjgSos3Yik1iZNTEzerE1.jpg',
        },
        {
          original: 'https://cdn.iticket.az/event/slide/qGBAbGjmqqihveBX0jiyzt1rci809rz7AYhcrxD2.jpg',
          thumbnail: 'https://cdn.iticket.az/event/slide/qGBAbGjmqqihveBX0jiyzt1rci809rz7AYhcrxD2.jpg',
        },
      ];
      
  return (
    <div className='carousel'><ImageGallery autoPlay={true} showThumbnails={false} showPlayButton={false} items={images} /></div>
  )
}

export default Carousel