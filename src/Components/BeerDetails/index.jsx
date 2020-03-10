import React, { Component } from 'react';

import { load as loadSingleProduct } from './../../Services/product';

export class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const id = this.props.match.params.id;
    loadSingleProduct(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <header>
          <figure className="product__single__image">
            <img src={beer.image_url} alt={beer.name} />
          </figure>
          <div className="product__single__description">
            <h1>{beer.name}</h1>
            <small>{beer.tagline}</small>
            <small>{beer.first_brewed}</small>
            <small>{beer.attenuation_level}</small>
            <p>{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </div>
        </header>
      </div>
    );
  }
}

export default BeerDetails;
