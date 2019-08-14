import React from 'react'
import { Link, graphql, navigate, Img } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import flyerEN from './../pages/gallery/TheLiveDrawingProject_Brochure_EN.pdf';
import flyerFR from './../pages/gallery/TheLiveDrawingProject_Brochure_FR.pdf';
import {indexPageStrings} from '../locales/strings';
import {localLink} from '../locales/localeUtils'

import phonePic from './../res/showcase/phone.jpg'
import gridFl1 from './gallery/festi/b-1-3.jpg'
import goodiesPic from './../res/showcase/permanent.jpg'
import gridPf1 from './gallery/pf/1.jpg'
import gridFl2 from './../res/showcase/b-6.jpg'
import gridCh1 from './../res/showcase/b-8.jpg'
import gridPf2 from './gallery/pf/b-12.jpg'
import gridCh2 from './../res/showcase/a2.jpg'

import {PhotoGrid} from './../components/PhotoGrid';


const AreWeInPerformanceMode = false;

export default function Index({ data, pageContext: { locale }, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  const LOCAL = indexPageStrings[locale];

  const localesOptions = {  year: 'numeric', month: 'long', day: 'numeric' };



  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'Home'}/>

      <div className={"ShowcasePage"}>
        <h1 style={{display: 'none'}}>{LOCAL.title}</h1>
        {AreWeInPerformanceMode && (
          <div className={"PerformanceMode"} id={"performanceOverlay"}>
            <div className="Logo"/>
            <a href="http://peinture.thelivedrawingproject.com">{LOCAL.clickHereToDraw}</a>
            <button onClick={() => {let t = document.getElementById('performanceOverlay'); t.style.display = 'none';t.style.pointerEvents = 'none'}}>{LOCAL.goToWebsite}</button>
          </div>
        )
        }

        <div className={"RollbackBackground"}>
        <div className={"ResponsiveContainer WelcomerCoverPhoto"}>
          <div className={"Inside"}>
            <div className="WelcomeCover">
              <div className={"Inside"}>
                <h2>{LOCAL.letsDrawTogether}</h2>
                <p>{LOCAL.mainDescription}</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className={"ResponsiveContainer"} style={{backgroundColor: '#aac989'}}>
          <div className={"Inside"}>
            <div className="ShowcasePart">
              <div className={"Text"}>
                <h2 style={{color: 'white'}}>{LOCAL.yourPhoneYourCanvasTitle}</h2>
                <p  style={{color: 'white'}}>{LOCAL.yourPhoneYourCanvasDescription}</p>
              </div>
              <div className={"ImageContainer"}>
                <img src={phonePic}/>
              </div>
            </div>
          </div>
        </div>



        <div className={"ResponsiveContainer"} style={{backgroundColor: '#f4f4f4'}}>
          <div className={"Inside"}>
            <div className="ShowcasePart Column">

              <div className={"Text Centered"}>
                <h2>{LOCAL.joinCollabTitle}</h2>
                <p>{LOCAL.joinCollabDescription}</p>
              </div>

              <div className={"PhotogridContainer"}>
                <PhotoGrid gatsbyImages={[gridFl1, gridFl2, gridCh1, gridCh2, gridPf1, gridPf2]} className={"PaddingForNormalSize"}/>
              </div>

            </div>
          </div>
        </div>

        <div className={"ResponsiveContainer"}>
          <div className={"Inside"}>
            <div className="ShowcasePart">
              <div className={"Text"}>
                <h2 style={{color: "rgb(40,40,40)"}}>{LOCAL.permanentArtTitle}</h2>
                <p>{LOCAL.permanentArtDescription}</p>
              </div>
              <div className={"ImageContainer"}>
                <img src={goodiesPic}/>
              </div>
            </div>
          </div>
        </div>

        <div className={"ResponsiveContainer"} style={{backgroundColor: '#aac989'}}>
          <div className={"Inside"}>
            <div className="ShowcasePart Column">
              <div className={"Text Centered"}>
                <h2 style={{color: 'white'}}>{LOCAL.useCasesTitle}</h2>
              </div>
              <div className={"ImageContainer"}>
                <div className="WordsCloud">
                  <>{LOCAL.useCases.map(wordCloud => {return <p key={wordCloud}>{wordCloud}</p>})}</>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className={"ResponsiveContainer"}>
          <div className={"Inside"}>
            <div className="ShowcasePart Column">
              <div className={"Text Centered"}>
                <h2 className="Punchline White" style={{color: "black"}}>{LOCAL.clientsTitle}</h2>
              </div>
              <div className={"ImageContainer"}>
                <div className={"ClientsLogo"}>
                  <div className={"Aadn"}/>
                  <div className={"Bonifacio"}/>
                  <div className={"Pf"}/>
                  <div className={"MaltingPot"}/>
                  <div className={"Chevagny"}/>
                  <div className={"Superposition"}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home homePosts">
          <div className="moreProjects">
            <Link to={'/about'}>{LOCAL.moreInfos}</Link>
            <Link to={'/gallery'}>{LOCAL.watchPhotos}</Link>

            <a href={"mailto:livedrawingproject@protonmail.com"}>{LOCAL.contactUs}</a>
            <a href={ locale === 'fr' ? flyerFR : flyerEN}>{LOCAL.downloadBrochure}</a>
          </div>
        </div>

      </div>
    </MainLayout>
  )
}

export const portfolioPostsQuery = graphql`
      query IndexQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter:  { category: { eq:"event"}}}
          ) {
              edges {
                  node {
                      excerpt(pruneLength: 250)
                      id
                      frontmatter {
                          title
                          date(formatString: "MMMM DD, YYYY")
                          path
                          category
                          subtitle
                          language
                          image {
                              childImageSharp {
                                  # Other options include height (set both width and height to crop),
                                  # grayscale, duotone, rotate, etc.
                                  fixed(width: 700) {
                                      # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                                      ...GatsbyImageSharpFixed
                                      src
                                  }

                              }
                          }
                      }
                  }
              }
          }
      }`


/*



 */
