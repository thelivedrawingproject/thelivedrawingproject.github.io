import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../bits/TldpFooter/Footer';
import './MainLayout.scss';
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher';
import { defaultLang } from '../locales/locales';
import { languageAutoRedirect } from '../locales/localeUtils';
import { NavbarData, FooterLinks } from './Data';
import TldpNavbar from '../bits/TldpNavbar/Navbar';
import TldpLogo from '../bits/TldpLogo/TldpLogo';
import MobileAppBar from '../bits/TldpNavbar/MobileAppBar';
import { BottomBar } from '../components/wip/BottomBar/BottomBar';
import { indexPageStrings } from '../locales/strings';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import {  ThemeProvider as MaterialThemeProvider, } from '@mui/material/styles';

// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }


// TODO: store a cookie to enable/disable splash screen
// const theme = createMuiTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#6d8879',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       main: '#516e93',
//     },
//     background: {
//       default: '#282c34',
//       paper: '#19191d',
//     },
//     action: {
//       hover: 'rgba(0,0,0,0.56)',
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// });

const theme = createTheme(adaptV4Theme({
  palette: {
    mode: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#6d8879',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#506b5c',
    },
    background: {
      default: '#282c34',
      paper: '#19191d',
    },
    action: {
      hover: 'rgba(0,0,0,0.56)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
}))

const AreWeInPerformanceMode = false;
const eventName = `Festi Lumi`;
const eventUrl = 'https://bonifacio.thelivedrawingproject.com/';

export default function MainLayout({ children, language, location }) {

  let debugTestSplash = false;

  if (typeof window !== 'undefined') { 
    debugTestSplash = (window.location.href.indexOf("?testSplash") !== -1);
  }

  let showPerformanceOverlay = false;
  const showPerformanceBottomBar = AreWeInPerformanceMode || debugTestSplash;
  const isItRootUrl =
    location.pathname === '/' ||
    location.pathname === '/fr' ||
    location.pathname === '/fr/dessine-en-lumieres-nantes' ||
    location.pathname === '/dessine-en-lumieres-nantes' ||
    location.pathname === '/fr/dessine-en-lumieres-nantes/' ||
    location.pathname === '/dessine-en-lumieres-nantes/' ||
    location.pathname === '/fr/';
  // homepage: single slash


  // Bad because language dependant...
  if ((AreWeInPerformanceMode && isItRootUrl) || debugTestSplash) {
    showPerformanceOverlay = true;
  }

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang;
  }
  const LOCAL = indexPageStrings[language];
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname);
  }

  const performanceSplashScreen = () => (
    <>
      <h1 style={{ display: 'none' }}>{LOCAL.title}</h1>
      <div className={'PerformanceMode'} id={'performanceOverlay'}>
        <div className={'LogoContainer'}>
          <TldpLogo />
        </div>

        <div style={{ textAlign: 'center', fontSize: '1.2em' }}>
          <strong className={'DarkModeTextAccent'} style={{ fontSize: '2em' }}>
            {eventName}
          </strong>
          <br />
          <br />
          {LOCAL.currentlyHappening}
        </div>
        <a
          href={eventUrl}
          target="_blank"
          rel="noopener nofollow noreferrer"
          onClick={() => {}}
        >
          {LOCAL.clickHereToDraw}
        </a>
        <button
          onClick={() => {
            let t = document.getElementById('performanceOverlay');
            t.style.display = 'none';
            t.style.pointerEvents = 'none';
          }}
          style={{ marginBottom: '20vh' }}
        >
          {LOCAL.goToWebsite}
        </button>
      </div>
    </>
  );

  return (

    <MaterialThemeProvider theme={theme}>


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
                currentLangCode={language}
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

   
  </MaterialThemeProvider>

  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
};
