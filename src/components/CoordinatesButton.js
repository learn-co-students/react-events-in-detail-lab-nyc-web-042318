// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  // onReceiveCoordinates(array, event) {
  //   array.push(event.clientX);
  //   array.push(event.clientY)
  // }

  handleEvent = (event) => {
    var array = []
    array.push(event.clientX);
    array.push(event.clientY)
    this.props.onReceiveCoordinates(array);

  }
  render() {
    return (
      <button onClick={this.handleEvent}>coordinates</button>
    )
  }
}


export default CoordinatesButton;
