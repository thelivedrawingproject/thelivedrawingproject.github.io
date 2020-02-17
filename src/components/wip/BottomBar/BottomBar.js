import React, { Component } from 'react'
import { Link } from 'gatsby'
import './BottomBar.scss'
import PropTypes from 'prop-types'

export class BottomBar extends Component {


  render() {
    return (
      <div className="BottomBar">
        <div className={'under'}>{this.props.eventName}</div>
        <a href={this.props.url}>Click to draw</a>
      </div>
    )
  }
}

BottomBar.propTypes = {
  eventName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
