import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'

export class Navbar extends Component {

  menuItems() {
    return (<>
        <Link activeClassName="active" to="/">HOME</Link>
        <Link activeClassName="active" to="/gallery">GALLERY</Link>
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
