import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurantById } from '../api';
import ImageOverlay from './ImageOverlay';

const RestaurantImage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantById(id).then(setRestaurant);
  }, [id]);

  if (!restaurant) return <div className="loading">Loading...</div>;

  return (
    <div className="image-container">
      <h3>{restaurant.name}</h3>
      <ImageOverlay imageUrl={restaurant.image} />
    </div>
  );
};

export default RestaurantImage;
