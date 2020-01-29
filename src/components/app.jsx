import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats';
import Flat from './flat';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 48.884211,
      lng: 2.34689
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  center() {
    return {
      lat: this.state.lat,
      lng: this.state.lng
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flatlist={flats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact
            //bootstrapURLKeys={{ key: 'AIzaSyCMcgy3cPL-nLOHA4T_Mgk-dcD2u_6O15U' }}
            defaultCenter={
              {
                lat: this.state.lat,
                lng: this.state.lng
              }
            }
            defaultZoom={12}
          >
            <Marker lat={this.state.lat} lng={this.state.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
