import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import PropTypes from 'prop-types'

export class Navbar extends Component {

  menuItems() {
    return (<>
        {this.props.links.map(link => {
          return  <Link activeClassName="active" to={link.path}>{link.name}</Link>
        })}
      </>
    )
  }

  render() {
    return (
      <div className="Navbar">
        <div className="headerLinks">
          {this.menuItems()}
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired
};
