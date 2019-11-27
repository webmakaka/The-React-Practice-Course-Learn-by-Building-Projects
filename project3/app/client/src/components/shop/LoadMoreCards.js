import React from 'react';
import CardBlockShop from 'components/utils/CardBlockShop';

const LoadMoreCards = props => {
  return (
    <div>
      <div>
        <CardBlockShop grid={props.grid} list={props.products} />
      </div>
    </div>
  );
};

export default LoadMoreCards;
