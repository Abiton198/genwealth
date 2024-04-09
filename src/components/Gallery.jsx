import React from 'react';
import due1 from '../img/gallery/due1.jpeg'
import due2 from '../img/gallery/due2.jpeg'
import due3 from '../img/gallery/due3.jpeg'
import due4 from '../img/gallery/due4.png'
import due5 from '../img/gallery/due5.jpeg'
import due6 from '../img/gallery/due6.jpeg'
import due7 from  '../img/gallery/due7.jpeg'
import due8 from '../img/gallery/due8.jpeg'
import due9 from '../img/gallery/due9.jpeg'
import due10 from '../img/gallery/due10.jpeg'
import due11 from '../img/gallery/due11.jpeg'
import due12 from '../img/gallery/due12.jpeg'
import due13 from '../img/gallery/due13.jpeg'
import due14 from '../img/gallery/due14.jpeg'
import due15 from '../img/gallery/due15.jpeg'
import due16 from '../img/gallery/due16.jpeg'
import due17 from '../img/gallery/due17.jpeg'
import due18 from '../img/gallery/due18.jpeg'
import due19 from '../img/gallery/due19.jpeg'
import due20 from '../img/gallery/due20.jpeg'


const Gallery = () => {
  const images = [
    {src: due1 , alt:'due1'},
      {src: due2 , alt:'due2'},
      {src: due3 , alt:'due3'},
      {src: due4 , alt:'due4'},
      {src: due5 , alt:'due5'},
      {src: due6 , alt:'due6'},
      {src: due7 , alt:'due7'},
      {src: due8 , alt:'due8'},
      {src: due9 , alt:'due9'},
      {src: due10 , alt:'due10'},
      {src: due11 , alt:'due11'},
      {src: due12 , alt:'due12'},
      {src: due13 , alt:'due13'},
      {src: due14 , alt:'due14'},
      {src: due15 , alt:'due15'},
      {src: due16 , alt:'due16'},
      {src: due17 , alt:'due17'},
      {src: due18 , alt:'due18'},
      {src: due19 , alt:'due19'},
      {src: due20 , alt:'due20'}
        // Add more image paths here
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Image ${index + 1}`}
          className="thumbnail-image"
        />
      ))}
    </div>
  );
};

export default Gallery;
