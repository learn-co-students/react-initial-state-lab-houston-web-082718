import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft > 0) {
      return <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
    } else {
      return <h2>Boom!</h2>
    }
  }
}
