import React from 'react';
import { Link } from 'react-router-dom';

const SingleBeer = props => {
  return (
    <Link to={`/beers/${props._id}`}>
      <figure className="product__image">
        <img src={props.image_url} alt={props.name} />
      </figure>
      <header className="product__information">
        <div className="product__details">
          <strong>{props.name}</strong>
          <span>{props.tagline}</span>
          <span>{props.contributed_by}</span>
        </div>
      </header>
    </Link>
  );
};

export default SingleBeer;
