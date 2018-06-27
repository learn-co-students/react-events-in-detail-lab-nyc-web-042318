// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
thing = (event) => {
  event.persist();
  setTimeout( () => {
    this.props.onDelayedClick(event)
  }, this.props)
  }
  render() {
    return (
      <button onClick={this.thing}> Delayed Button </button>
    )
  }
}


export default DelayedButton;
