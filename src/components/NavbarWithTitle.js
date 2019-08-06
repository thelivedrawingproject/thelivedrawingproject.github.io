import React, { Component } from 'react'
import { Link } from 'gatsby'
import './NavbarWithTitle.scss'
import PropTypes from 'prop-types'

export class NavbarWithTitle extends Component {

  menuItems() {
    return (<>
        {this.props.links.map(link => {
          return  <Link key={link.name} activeClassName="active" to={link.path}>{link.name}</Link>
        })}
      </>
    )
  }

  render() {
    return (
      <div className="NavbarWithTitle">
        <div className={"Title"}>
          <div>The Live Drawing Project</div>
        </div>
        <div className={"Links"}>
          {this.menuItems()}
        </div>
      </div>
    )
  }
}

NavbarWithTitle.propTypes = {
  links: PropTypes.array.isRequired
};
