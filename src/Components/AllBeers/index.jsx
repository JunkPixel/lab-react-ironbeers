import React, { Component } from 'react';
import SingleBeer from './../SingleBeer';

import { list as listProducts } from './../../Services/product';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listProducts()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="product__list">
          {this.state.beers.map(beer => (
            <SingleBeer key={beer._id} {...beer} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeers;
