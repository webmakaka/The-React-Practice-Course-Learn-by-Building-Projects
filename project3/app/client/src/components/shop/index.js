import React, { Component } from 'react';
import PageTop from 'components/utils/PageTop';

import { connect } from 'react-redux';
import {
  getProductsToShop,
  getBrands,
  getWoods
} from 'actions/productsActions';

import CollapseCheckBox from 'components/utils/CollapseCheckBox';
import CollapseRadio from 'components/utils/CollapseRadio';

import { frets, price } from 'components/utils/forms/fixedCategories';

import LoadMoreCards from 'components/shop/LoadMoreCards';

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

    this.props.dispatch(
      getProductsToShop(this.state.skip, this.state.limit, this.state.filters)
    );
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

    this.showFilterdResults(newFilters);

    this.setState({
      filters: newFilters
    });
  };

  showFilterdResults = filters => {
    this.props
      .dispatch(getProductsToShop(0, this.state.limit, filters))
      .then(() => {
        this.setState({
          skip: 0
        });
      });
  };

  render() {
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
            <div className="right">
              <div className="shop_options">
                <div className="shop_grids clear">grids</div>
              </div>
              <div>
                <LoadMoreCards
                  grid={this.state.grid}
                  limit={this.state.limit}
                  size={products.toShopSize}
                  products={products.toShop}
                  loadMore={() => console.log('load more')}
                />
              </div>
            </div>
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
