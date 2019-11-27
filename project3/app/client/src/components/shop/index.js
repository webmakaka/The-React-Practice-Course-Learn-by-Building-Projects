import React, { Component } from 'react';
import PageTop from 'components/utils/PageTop';

import { connect } from 'react-redux';
import { getBrands, getWoods } from 'actions/productsActions';

import CollapseCheckBox from 'components/utils/CollapseCheckBox';
import CollapseRadio from 'components/utils/CollapseRadio';

import { frets, price } from 'components/utils/forms/fixedCategories';

class Shop extends Component {
  state = {
    grid: '',
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  handlePlice = value => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === 'price') {
      let priceValues = this.handlePlice(filters);
      newFilters[category] = priceValues;
    }

    this.setState({
      filters: newFilters
    });
  };

  render() {
    console.log(this.state.filters);

    const products = this.props.products;

    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckBox
                initState={true}
                title="Brands"
                list={products.brands}
                handleFilters={filters => {
                  this.handleFilters(filters, 'brand');
                }}
              />
              <CollapseCheckBox
                initState={false}
                title="Frets"
                list={frets}
                handleFilters={filters => {
                  this.handleFilters(filters, 'frets');
                }}
              />
              <CollapseCheckBox
                initState={false}
                title="Wood"
                list={products.woods}
                handleFilters={filters => {
                  this.handleFilters(filters, 'wood');
                }}
              />
              <CollapseRadio
                initState={true}
                title="Price"
                list={price}
                handleFilters={filters => {
                  this.handleFilters(filters, 'price');
                }}
              />
            </div>
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
