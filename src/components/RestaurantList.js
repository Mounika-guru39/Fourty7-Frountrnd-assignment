import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchNearbyRestaurants } from '../api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNearbyRestaurants().then(setRestaurants);
  }, []);

  return (
    <div className="list-container">
      <h2>Nearby Restaurants</h2>
      <ul className="restaurant-list">
        {restaurants.map((r) => (
          <li key={r.id} onClick={() => navigate(`/restaurant/${r.id}`)} className="restaurant-item">
            {r.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
