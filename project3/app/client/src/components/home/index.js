import React, { Component } from 'react';
import HomeSlider from 'components/home/HomeSlider';
import HomePromotion from 'components/home/HomePromotion';

import { connect } from 'react-redux';
import {
  getProductsBySell,
  getProductsByArrival
} from 'actions/productsActions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
