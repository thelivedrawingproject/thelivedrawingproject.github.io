import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './MainLayout.scss'
import LanguageSwitcher from '../components/LanguageSwitcher';
import locales from '../locales/locales';

export default function MainLayout({ children, language, location }) {
  return (
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
          <LanguageSwitcher currentLanguage={language} availableLanguages={Object.keys(locales)} currentUrl={location.pathname}/>
        </div>
      </div>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object.isRequired
}
