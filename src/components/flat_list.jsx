import React, { Component } from 'react';
import Flat from './flat';
import App from './app';


class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flatlist.map((flat) => <Flat flat={flat} key={flat.imageUrl} selectFlat={this.props.selectFlat} />)}
      </div>
    );
  }
}

export default FlatList;
