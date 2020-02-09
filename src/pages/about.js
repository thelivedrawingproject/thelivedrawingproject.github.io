import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import { bookingPageStrings, indexPageStrings } from '../locales/strings'
import { localLink } from '../locales/localeUtils'
import flyerFR from './gallery/TheLiveDrawingProject_Brochure_FR.pdf'
import flyerEN from './gallery/TheLiveDrawingProject_Brochure_EN.pdf'

export default function AboutPage({ data, pageContext: { locale }, location }) {
  const LOCAL = bookingPageStrings[locale]

  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'About'} />

      <div className={'ResponsiveContainer'}>
        <div className={'Inside'}>
          <div className="FullPageContainer" style={{ marginBottom: '2em' }}>
            <h1 style={{ opacity: 0 }}>About</h1>
            <h2 className="Quote">{LOCAL.bookingPunchline}</h2>
            <div
              style={{
                textAlign: 'center',
                fontSize: '1.5em',
                lineHeight: 1.4,
              }}
            >
              <p>{LOCAL.bookingSubtext}</p>
            </div>
            <div className="moreProjects" style={{ marginBottom: '5em' }}>
              <Link
                to={'/contact'}
                className={'Quote'}
                style={{ fontSize: '1.5em' }}
              >
                {LOCAL.reachUs}
              </Link>
            </div>
          </div>

          <div className="FullPageContainer">
            <h2 className="Punchline Accent">{LOCAL.features}</h2>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.customisableTitle}</h3>
            <p className="Subtext">{LOCAL.customisableText}</p>
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

          <div className={'ShowcasePage'}>
            <div className={'ResponsiveContainer'}>
              <div className={'Inside'}>
                <div className="ShowcasePart Column">
                  <div className={'Text Centered'}>
                    <h2 className="Punchline White" style={{ color: 'black' }}>
                      {LOCAL.clientsTitle}
                    </h2>
                  </div>
                  <div className={'ImageContainer'}>
                    <div className={'ClientsLogo'}>
                      <a
                        className={'Chrd'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://www.chrd.lyon.fr/chrd/sections/fr/musee/'}
                      />
                      <a
                        className={'Cpl'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://copenhagenlightfestival.org'}
                      />
                      <a
                        className={'Osterbro'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://oesterbrolokaludvalg.kk.dk/'}
                      />
                      <a
                        className={'Cda'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://calgarydowntown.com/'}
                      />
                      <a
                        className={'Aadn'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://aadn.org/'}
                      />
                      <a
                        className={'Bonifacio'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={
                          'https://www.bonifacio.fr/agenda-manifestation/festi-lumi/'
                        }
                      />
                      <a
                        className={'Pf'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://www.peinturefraichefestival.fr/'}
                      />
                      <a
                        className={'MaltingPot'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.facebook.com/LeMaltingPot/'}
                      />
                      <a
                        className={'Chevagny'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://chevagny-labelvie.fr/'}
                      />
                      <a
                        className={'Superposition'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://superposition-lyon.com/'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home homePosts">
            <div className="moreProjects">
              <Link to={'/contact'}>{LOCAL.bookingContactUs}</Link>
              <a href={locale === 'fr' ? flyerFR : flyerEN}>
                {LOCAL.downloadBrochure}
              </a>
              <a href={locale === 'fr' ? flyerEN : flyerFR}>
                {LOCAL.downloadBrochureOtherLanguage}
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
