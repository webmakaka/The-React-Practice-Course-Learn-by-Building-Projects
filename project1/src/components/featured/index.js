import React from 'react';
import Carrousel from 'components/featured/Carrousel';
import TimeUntil from 'components/featured/TimeUntil';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />

      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>

      <TimeUntil />
    </div>
  );
};

export default Featured;
