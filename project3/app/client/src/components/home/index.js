import React, { Component } from 'react';
import HomeSlider from 'components/home/HomeSlider';
import HomePromotion from 'components/home/HomePromotion';
import CardBlock from 'components/utils/CardBlock';

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
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guitars"
        />
        <HomePromotion />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
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
