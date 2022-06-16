import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import '../../assets/sass/sliders/carousel.scss'

function Carousel() {

  const [images, setImage] = useState([]);

  useEffect(() => {
    loadSliders();

  }, []);

  const loadSliders = async () => {
  
    const result = await axios.get("https://localhost:44351/api/Slider/GetAll");
    setImage(result.data);

  }


let fullImgs = [];
images.forEach(image => {

  let data = "data:image/jpeg;base64,";
  let fullImg = data + image.image;
  var obj = {
    original:fullImg,
    thumbnail:fullImg

  }

  fullImgs.push(obj)
});
return (
  <div className='carousel'><ImageGallery autoPlay={true} showThumbnails={false} showPlayButton={false} items={fullImgs} /></div>
)
}

export default Carousel