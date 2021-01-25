import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
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
      <MetaTags title={'BOOKING'} />

      <div className={'ResponsiveContainer'}>
        <div className={'Inside'}>
          <div className="ShowcasePart">
            <h1 style={{ opacity: 0 }}>Booking</h1>
            <h2 className="Quote">{LOCAL.bookingPunchline}</h2>
            <div className={'Text Centered'}>
              <h2 style={{ color: 'white' }}>
                {LOCAL.yourPhoneYourCanvasTitle}
              </h2>
              <p style={{ color: 'white' }}>
                {LOCAL.yourPhoneYourCanvasDescription}
              </p>
            </div>
            <div className={'ImageContainer'}>
              <Img fluid={data.image.childImageSharp.fluid} alt="" />
            </div>
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
        </div>
      </div>

      <div className={'ShowcasePage'}>
      <div className={'ResponsiveContainer'}>
            <div className={'Inside'}>
              <div className="ShowcasePart Column">
                <h3 className="Punchline White Strong">
                  {LOCAL.useCasesTitle}
                </h3>
                
                <div className="WordsCloud">
                  <>
                    {LOCAL.useCases.map((wordCloud) => {
                      return <p key={wordCloud}>{wordCloud}</p>
                    })}
                  </>
                </div>
                <p className="Subtext" style={{fontSize:'1.5em'}}><em>{LOCAL.useCasesSubtitle}</em></p>
              </div>
            </div>
          </div>
          </div>

      <div className={'ShowcasePage'}>
      <div className={'ResponsiveContainer'}>
            <div className={'Inside'}>
              <div className="ShowcasePart Column">
                <h3 className="Punchline White Strong">
                 {LOCAL.ourValues}
                </h3>
                
                <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.inclusiveValueTitle}</h3>
            <p className="Subtext">{LOCAL.inclusiveValueText}</p>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White"> {LOCAL.unlockValueTitle}</h3>
            <p className="Subtext">{LOCAL.unlockValueText}</p>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.connectValueTitle}</h3>
            <p className="Subtext">{LOCAL.connectValueText}</p>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.tellValueTitle}</h3>
            <p className="Subtext">{LOCAL.tellValueText}</p>

          </div>
                
          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.magicValueTitle}</h3>
            <p className="Subtext">{LOCAL.magicValueText}</p>
              </div>

              </div>
            </div>
          </div>
          </div>




      <div className={'ShowcasePage'}>
        <div className={'Inside'}>
          <div className="FullPageContainer">
            <h2 className="Punchline White Strong">{LOCAL.features}</h2>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.remoteTitle}</h3>
            <p className="Subtext">{LOCAL.remoteSubtext}</p>
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
            <h3 className="Punchline White">{LOCAL.multilocTitle}</h3>
            <p className="Subtext">{LOCAL.multilocSubtext}</p>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.moderationTitle}</h3>
            <p className="Subtext">{LOCAL.moderationSubtext}</p>
          </div>

          <div className="FullPageContainer">
            <h3 className="Punchline White">{LOCAL.cellularNetworkTitle}</h3>
            <p className="Subtext">{LOCAL.cellularNetworkSubtext}</p>
          </div>

          <br />
          <br />
          <br />



          <div className={'ShowcasePage'}>
            <div className={'ResponsiveContainer'}>
              <div className={'Inside'}>
                <div className="ShowcasePart Column">
                  <div>
                    <h2 className="Punchline White Strong">
                      {LOCAL.clientsTitle}
                    </h2>
                  </div>
                  <div className={'ImageContainer'}>
                    <div className={'ClientsLogo'}>
                      <a
                        className={'InstitutFrancais'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.institutfrancais.com'}
                      />
                      <a
                        className={'Lima'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.alianzafrancesa.org.pe/'}
                      />
                      <a
                        className={'Embassy'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://ie.ambafrance.org/'}
                      />
                      <a
                        className={'Cci'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.centreculturelirlandais.com/'}
                      />
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
                        className={'Glow'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://glowyyc.com'}
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
                        className={'Aadn'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://aadn.org/'}
                      />
                      <a
                        className={'Pf'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://www.peinturefraichefestival.fr/'}
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

export const aboutPageQuery = graphql`
  query AboutQuery {
    image: file(
      relativePath: { eq: "2020-03-05-spraying-board/SprayingBoard_4.jpg" }
    ) {
      ...gatImage
    }
  }
`
