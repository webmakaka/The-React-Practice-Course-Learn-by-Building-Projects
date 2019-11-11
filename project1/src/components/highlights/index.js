import React from 'react';
import Description from 'components/highlights/Description';
import Discount from 'components/highlights/Discount';

const HighLights = () => {
  return (
    <div className="highlight_wrapper">
      <Description />
      <Discount />
    </div>
  );
};

export default HighLights;
