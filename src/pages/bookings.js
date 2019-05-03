import React from 'react'
import { Link } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import {bookingPageStrings} from '../locales/strings';
import { localLink } from '../locales/localeUtils'
import flyerFR from './gallery/TheLiveDrawingProject_Brochure_FR.pdf'
import flyerEN from './gallery/TheLiveDrawingProject_Brochure_EN.pdf'

export default function BookingPage({ data, pageContext: { locale }, location }) {
  const LOCAL = bookingPageStrings[locale];

  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'Bookings'}/>

      <div className="FullPageContainer" style={{marginBottom: '2em'}}>
        <h1 style={{opacity:0}}>Booking</h1>
        <h2 className="Quote">{LOCAL.bookingPunchline}</h2>
        <div style={{textAlign:'center', fontSize:'1.2em'}}>
          <p>{LOCAL.bookingSubtext}</p>
        </div>
        <div className="moreProjects" style={{marginBottom:'6em'}}>
          <Link to={localLink(locale, '/contact')} className={"Quote"} style={{fontSize:'1.5em'}}>{LOCAL.bookingReachUs}</Link>
        </div>
      </div>

      <br/>
      <br/>

      <div className="FullPageContainer">
        <h2 className="Punchline Accent">{LOCAL.useCases}</h2>
        <div className="WordsCloud">
          <>{LOCAL.wordClouds.map(wordCloud => {return <p key={wordCloud}>{wordCloud}</p>})}</>
        </div>
      </div>

      <div className="FullPageContainer">
        <h2 className="Punchline Accent">{LOCAL.features}</h2>
      </div>


      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.customizableTitle}</h3>
        <p className="Subtext">{LOCAL.customisableSubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.usersTitle}</h3>
        <p className="Subtext">{LOCAL.usersSubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.userFriendlyTitle}</h3>
        <p className="Subtext">{LOCAL.userFriendlySubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.cellularNetworkTitle}</h3>
        <p className="Subtext">{LOCAL.cellularNetworkSubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.moderationTitle}</h3>
        <p className="Subtext">{LOCAL.moderationSubtext}</p>
      </div>


      <div className="home homePosts">
        <div className="moreProjects">
          <Link to={localLink(locale, '/contact')}>{LOCAL.bookingContactUs}</Link>
          <a href={ locale === 'fr' ? flyerFR : flyerEN}>{LOCAL.downloadBrochure}</a>
        </div>
      </div>
    </MainLayout>
  )
}
