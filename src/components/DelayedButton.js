// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    // this.props.onDelayedClick(event)
    setTimeout(() => { this.props.onDelayedClick(event); }, this.props.delay)
    // setTimeout({this.props.onDelayedClick(event)}, {this.props.delay})
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}

export default DelayedButton;
