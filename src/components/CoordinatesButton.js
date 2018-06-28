// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
  render() {
    return (
      <button onClick={this.handleme}>Click Me</button>
    )
  }

  handleme = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}

export default CoordinatesButton;
