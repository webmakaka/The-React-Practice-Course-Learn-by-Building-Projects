import React from 'react';
import PromotionAnimation from 'components/home/promotion/PromotionAnimation';

const Promotion = () => {
  return (
    <div
      className="promotion_wrapper"
      style={{
        background: '#ffffff'
      }}
    >
      <div className="container">
        <PromotionAnimation />
      </div>
    </div>
  );
};

export default Promotion;
