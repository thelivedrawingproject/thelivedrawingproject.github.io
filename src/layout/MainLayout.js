import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './MainLayout.scss'

const MainLayout = ({ children }) => (
      <>
        <div className="CssGridNavContentFooter">
          <nav className="gridNavBar">
            <Navbar/>
          </nav>
          <div className="gridContent styleContent">
            {children}
          </div>
          <div className="gridFooter">
            <Footer/>
          </div>
        </div>
      </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
