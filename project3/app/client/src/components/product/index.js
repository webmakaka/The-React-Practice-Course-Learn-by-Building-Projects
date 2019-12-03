import React, { Component } from 'react';

import { connect } from 'react-redux';

import PageTop from 'components/utils/PageTop';

import { getProductDetail, clearProductDetail } from 'actions/productsActions';
import { addToCart } from 'actions/userActions';

import ProdInfo from 'components/product/ProdInfo';
import ProdImg from 'components/product/ProdImg';

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response => {
      if (!this.props.products.prodDetail) {
        this.props.history.push('/');
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCarthandler(id) {
    this.props.dispatch(addToCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title="Product detail"></PageTop>
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: '500px' }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProdInfo
                  addToCart={id => this.addToCarthandler(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            'Loading'
          )}
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

export default connect(mapStateToProps)(ProductPage);
