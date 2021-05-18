import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class Item extends React.Component {
  render() {
    const { title, imagePath, price, itemId, techSpecs } = this.props;

    const location = {
      pathname: `/itemDetails/${itemId}`,
      state: techSpecs,
    };

    return (
      <div data-testid="product" className="product-card">
        <img src={ imagePath } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <Link to={ location }>
          <button
            type="button"
            data-testid="product-detail-link"
          >
            Ver detalhes
          </button>
        </Link>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
  itemId: PropTypes.string,
}.isRequired;

export default Item;
