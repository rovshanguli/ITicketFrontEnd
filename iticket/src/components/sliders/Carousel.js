import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import '../../assets/sass/sliders/carousel.scss'

function Carousel() {

  // const images1 = [

  //   {
  //     original: 'https://cdn.iticket.az/event/slide/VTOQ6n8YjX6qeD6f42FKjgSos3Yik1iZNTEzerE1.jpg',
  //     thumbnail: 'https://cdn.iticket.az/event/slide/VTOQ6n8YjX6qeD6f42FKjgSos3Yik1iZNTEzerE1.jpg',
  //   },
  //   {
  //     original: 'https://cdn.iticket.az/event/slide/qGBAbGjmqqihveBX0jiyzt1rci809rz7AYhcrxD2.jpg',
  //     thumbnail: 'https://cdn.iticket.az/event/slide/qGBAbGjmqqihveBX0jiyzt1rci809rz7AYhcrxD2.jpg',
  //   },
  // ];


  const [images, setImage] = useState([]);

  useEffect(() => {
    loadOrders();

  }, []);

  const loadOrders = async () => {
    debugger
    const result = await axios.get("https://localhost:44351/api/Slider/GetAll");
    setImage(result.data);

  }


let fullImgs = [];
images.forEach(image => {
  debugger
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