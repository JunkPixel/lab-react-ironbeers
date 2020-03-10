import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <div>
          <figure>
            <img src="../../../images/beers.png" alt="name" />
          </figure>
          <strong>All Beers</strong>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore laudantium
            ullam neque quae vel cumque in quis, magni consequatur!
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <figure>
          <img src="../../../images/new-beer.png" alt="name" />
        </figure>
        <strong>New Beer</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore laudantium
          ullam neque quae vel cumque in quis, magni consequatur!
        </p>
      </Link>
      <Link to="/random-beer">
        <figure>
          <img src="../../../images/random-beer.png" alt="name" />
        </figure>
        <strong>RandomBeer</strong>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore laudantium
          ullam neque quae vel cumque in quis, magni consequatur!
        </p>
      </Link>
    </div>
  );
}
