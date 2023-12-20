import React from 'react';
import './ImageWithText.scss';

const ImageWithText = ({ imageUrl, text }) => (
  <div className="image-with-text" style={{ backgroundImage: `url(${imageUrl})` }}>
    <p className="text">{text}</p>
  </div>
);

export default ImageWithText;