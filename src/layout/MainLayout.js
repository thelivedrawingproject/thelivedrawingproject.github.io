import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './MainLayout.scss'
import LanguageSwitcher from '../components/LanguageSwitcher';
import { defaultLanguage, supportedLanguages } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import {NavbarData} from './NavbarData'

export default function MainLayout({ children, language, location }) {

  if(language !== 'fr' && language !== 'en') {
    language = defaultLanguage;
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname);
  }

  return (
    <>
      <div className="CssGridNavContentFooter">
        <nav className="gridNavBar">
          <Navbar links={NavbarData[language].links}/>
        </nav>
        <div className="gridContent styleContent">
          {children}
        </div>
        <div className="gridFooter">
          <Footer/>
          {location && <LanguageSwitcher currentLanguage={language} availableLanguages={Object.keys(supportedLanguages)} currentUrl={location.pathname}/>}
        </div>
      </div>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object
}
