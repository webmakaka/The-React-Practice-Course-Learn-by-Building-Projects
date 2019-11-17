import React from 'react';
import PromotionAnimation from 'components/home/promotion/PromotionAnimation';
import Enroll from 'components/home/promotion/Enroll';

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
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
