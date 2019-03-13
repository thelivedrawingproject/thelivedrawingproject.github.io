import React from 'react'
import { Link } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import flyer from './../pages/gallery/flyer.pdf';
import {indexPageStrings} from '../locales/strings';
import { localLink } from '../locales/localeUtils'

export default function TechnologyPage({ data, pageContext: { locale }, location }) {
  const LOCAL = indexPageStrings[locale];

  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'Home'}/>


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
          <Link to={localLink(locale, '/contact')}>Contact</Link>
          <Link to={localLink(locale, '/gallery')}>{LOCAL.gallery}</Link>
          <a href={flyer}>{LOCAL.downloadBrochure}</a>
        </div>
      </div>
    </MainLayout>
  )
}
