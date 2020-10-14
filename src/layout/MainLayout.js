import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/TldpFooter/Footer'
import './MainLayout.scss'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher'
import { defaultLanguage, supportedLanguages } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'
import TldpNavbar from '../bits/TldpNavbar/Navbar'
import MobileAppBar from '../bits/TldpNavbar/MobileAppBar'
import { BottomBar } from '../components/wip/BottomBar/BottomBar'
import { indexPageStrings } from '../locales/strings'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6d8879',
      /*
      $accentColor: #85b94f; //#aac989; //#4d9933;
$accentLight: #aac989;
$accentColorIdle: #2b6b15;
*/
    },
  },
})
// TODO: store a cookie to enable/disable splash screen

const AreWeInPerformanceMode = false
const eventName = 'Pixel Break'
const eventUrl = 'https://pixel.thelivedrawingproject.com/'

export default function MainLayout({ children, language, location }) {
  let showPerformanceOverlay = false
  const showPerformanceBottomBar = AreWeInPerformanceMode
  const isItRootUrl =
    location.pathname === '/' ||
    location.pathname === '/fr' ||
    location.pathname === '/fr/'
  // homepage: single slash

  // Bad because language dependant...
  if (AreWeInPerformanceMode && isItRootUrl) {
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
          <strong className={'DarkModeTextAccent'} style={{ fontSize: '2em' }}>
            {eventName}
          </strong>
          <br />
          <br />
          {LOCAL.currentlyHappening}
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
    <ThemeProvider theme={theme}>
      {showPerformanceOverlay && performanceSplashScreen()}
      <div className="CssGridNavContentFooter">
        {!isItRootUrl && (
          <div className="AppBar">
            <MobileAppBar title={'The Live Drawing Project'} />
          </div>
        )}
        <nav className="gridNavBar">
          <TldpNavbar links={NavbarData[language].links} />
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

          <div
            style={{
              paddingBottom: '3rem',
              paddingTop: '2rem',
              color: 'dimgray',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {LOCAL.noPersonalData}
            <br />
            <br />
            {LOCAL.madeInLyon}
          </div>
        </div>
        {showPerformanceBottomBar && (
          <div className={'gridBottomBar'}>
            <BottomBar
              url={eventUrl}
              eventName={eventName}
              buttonMessage={LOCAL.clickToDraw}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
}
