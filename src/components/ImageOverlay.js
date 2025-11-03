import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const ImageOverlay = ({ imageUrl }) => {
  const [logoPosition, setLogoPosition] = useState({ x: 150, y: 80 });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fastor Restaurant Image',
          text: 'Check out this restaurant!',
          url: window.location.href,
        });
      } catch (error) {
        alert('Share failed: ' + error.message);
      }
    } else {
      alert('Web sharing is not supported in your browser');
    }
  };

  return (
    <>
    <div className="overlay-wrapper">
      <img src={imageUrl} alt="Restaurant" className="restaurant-image" />
      <Rnd
        size={{ width: 80, height: 80 }}
        position={{ x: logoPosition.x, y: logoPosition.y }}
        onDragStop={(e, d) => {
          setLogoPosition({ x: d.x, y: d.y });
        }}
        bounds="parent"
        dragHandleClassName="logo-drag-handle"
      >
        <img src="/fastor-logo.png" alt="Fastor Logo" className="fastor-logo logo-drag-handle" />
      </Rnd>
    </div>
    <button onClick={handleShare} className="btn-primary share-btn">Share Image</button>
    </>
  );
};

export default ImageOverlay;
