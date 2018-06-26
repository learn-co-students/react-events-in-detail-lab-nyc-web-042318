import React from 'react';

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  whenButtonIsClicked = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.whenButtonIsClicked} />
    )
  }
}

export default DelayedButton;
