import React, { Component } from 'react';

class Bands extends Component {


  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    });
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;


// You will need to write the Bands component. This component should display a ul with a list element for each of the bands in the store's state. Each list element should have text with the corresponding name of the band.
// You will also need to fill in the manageBand reducer located under ./src/reducers/manageBand.js. It will need to respond to an action of type 'ADD_BAND' and correspondingly concatenate a new band each time the action is dispatched.
