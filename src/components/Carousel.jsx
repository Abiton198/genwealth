
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import step4_a from '../img/step4_a.jpg'
import step4_b from '../img/step4_b.jpg'
import step4_c from '../img/step4_c.jpg'

const Carousel = () => {
  // Data for the carousel images
  const images = [
    { src: step4_a, alt: 'Step 4A' },
    { src: step4_b, alt: 'Step 4B' },
    { src: step4_c, alt: 'Step 4C' },
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {/* Map through the images and create carousel slides */}
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} style={{ height: '300px', width:'300px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
