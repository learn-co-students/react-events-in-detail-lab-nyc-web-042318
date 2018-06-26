import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={(event) => { this.props.onReceiveCoordinates([event.screenX, event.screenY])}} />
    )

  }
}

export default CoordinatesButton;
