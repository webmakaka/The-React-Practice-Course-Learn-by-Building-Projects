import React, { Component } from 'react';
import PageTop from 'components/utils/PageTop';

import { connect } from 'react-redux';
import { getBrands, getWoods } from 'actions/productsActions';

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  render() {
    const products = this.props.products;

    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">left</div>
            <div className="right">right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Shop);
