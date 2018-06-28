// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  grabCoordinates (e) {
    let coord = []
    coord.push(e.clientX)
    coord.push(e.clientY)

    return this.props.onReceiveCoordinates(coord)
  }

  render () {
    return (
      <button onClick={(e) => this.grabCoordinates(e)} />
    )
  }
}
