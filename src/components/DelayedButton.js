// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
  render() {
    return (
      <button onClick={this.dothings}>Click Me</button>
    )
  }

  dothings = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

}

export default DelayedButton;
