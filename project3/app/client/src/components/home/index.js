import React, { Component } from 'react';
import HomeSlider from 'components/home/HomeSlider';
import HomePromotion from 'components/home/HomePromotion';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    );
  }
}

export default Home;
