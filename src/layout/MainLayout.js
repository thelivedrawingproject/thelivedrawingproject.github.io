import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/TldpFooter/Footer'
import './MainLayout.scss'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher'
import { defaultLanguage, supportedLanguages } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'
import { NavbarSlim } from '../bits/NavbarSlim/NavbarSlim'
import { BottomBar } from '../components/wip/BottomBar/BottomBar'
import { indexPageStrings } from '../locales/strings'

// TODO: store a cookie to enable/disable splash screen

const AreWeInPerformanceMode = false
const eventName = '#StayHome'
const eventUrl = 'https://stayhome.thelivedrawingproject.com/'

export default function MainLayout({ children, language, location }) {
  let showPerformanceOverlay = false
  const showPerformanceBottomBar = AreWeInPerformanceMode

  // homepage: single slash

  // Bad because language dependant...
  if (
    AreWeInPerformanceMode &&
    (location.pathname === '/' ||
      location.pathname === '/fr' ||
      location.pathname === '/fr/')
  ) {
    showPerformanceOverlay = true
  }

  if (language !== 'fr' && language !== 'en') {
    language = defaultLanguage
  }
  const LOCAL = indexPageStrings[language]
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname)
  }

  const performanceSplashScreen = () => (
    <>
      <h1 style={{ display: 'none' }}>{LOCAL.title}</h1>
      <div className={'PerformanceMode'} id={'performanceOverlay'}>
        <div className="Logo" />
        <div style={{ textAlign: 'center', fontSize: '1.2em' }}>
          {'Lyonnaises, Lyonnais, dessinons ensemble !'}
          <br />
          <br />
          <strong className={'DarkModeTextAccent'} style={{ fontSize: '2em' }}>
            {eventName}
          </strong>
        </div>
        <a href={eventUrl} onClick={() => {}}>
          {LOCAL.clickHereToDraw}
        </a>
        <button
          onClick={() => {
            let t = document.getElementById('performanceOverlay')
            t.style.display = 'none'
            t.style.pointerEvents = 'none'
          }}
          style={{ marginBottom: '20vh' }}
        >
          {LOCAL.goToWebsite}
        </button>
      </div>
    </>
  )

  return (
    <>
      {showPerformanceOverlay && performanceSplashScreen()}
      <div className="CssGridNavContentFooter">
        <nav className="gridNavBar">
          <NavbarSlim links={NavbarData[language].links} />
        </nav>
        <div className="gridContent styleContent">{children}</div>
        <div className="gridFooter">
          <Footer links={FooterLinks[language].links} lang={language} />
          {location && (
            <LanguageSwitcher
              currentLanguage={language}
              availableLanguages={Object.keys(supportedLanguages)}
              currentUrl={location.pathname}
            />
          )}
        </div>
        {showPerformanceBottomBar && (
          <div className={'gridBottomBar'}>
            <BottomBar url={eventUrl} eventName={eventName} />
          </div>
        )}
      </div>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
}
