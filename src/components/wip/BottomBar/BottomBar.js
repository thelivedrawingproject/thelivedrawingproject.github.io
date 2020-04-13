import React, { Component } from 'react'
import { Link } from 'gatsby'
import './BottomBar.scss'
import PropTypes from 'prop-types'

export class BottomBar extends Component {
  render() {
    return (
      <div className="BottomBar">
        <div className={'under'}>{this.props.eventName}</div>
        <a href={this.props.url}>{this.props.buttonMessage}</a>
      </div>
    )
  }
}

BottomBar.propTypes = {
  eventName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string,
}

BottomBar.defaultProps = {
  buttonMessage: 'Click to draw',
}
