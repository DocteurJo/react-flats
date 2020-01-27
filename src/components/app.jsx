import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';
import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
        <Flat />
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
