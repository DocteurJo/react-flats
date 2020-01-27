import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const flat = [
      {
        name: "Charm at the Steps of the Sacre Coeur/Montmartre",
        imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        price: 164,
        priceCurrency: "EUR",
        lat: 48.884211,
        lng: 2.34689
      }];

    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat[0].imageUrl}')` }}>
        <div className="card-category">
          {flat[0].price}
          {flat[0].priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat[0].name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
