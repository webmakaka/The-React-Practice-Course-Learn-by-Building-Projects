import React from 'react';
// import moment from 'moment';

const UserHistoryBlock = props => {
  const renderBocks = () =>
    props.products
      ? props.products.map((product, i) => (
          <tr key={i}>
            {/* <td>{moment(product.dateOfPurchase).format('DD-MM-YYYY')}</td> */}
            <td>{product.porder}</td>
            <td>
              {product.brand} {product.name}
            </td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))
      : null;

  return (
    <div className="history_blocks">
      <table>
        <thead>
          <tr>
            <th>Order number</th>
            <th>Product</th>
            <th>Price paid</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderBocks()}</tbody>
      </table>
    </div>
  );
};

export default UserHistoryBlock;
